const fs = require('fs');
const path = require('path');

const root = process.cwd();
const helmDir = path.join(root, 'infra', 'helm');
const chartDir = path.join(helmDir, 'charts', 'microservice');
const tplDir = path.join(chartDir, 'templates');
const devEnvDir = path.join(helmDir, 'environments', 'dev');

// 1. Chart.yaml
fs.writeFileSync(path.join(chartDir, 'Chart.yaml'),
`apiVersion: v2
name: microservice
description: Reusable microservice chart for English Learning Platform
type: application
version: 0.1.0
appVersion: "1.0.0"
`);

// 2. _helpers.tpl
fs.writeFileSync(path.join(tplDir, '_helpers.tpl'),
`{{- define "microservice.name" -}}
{{- default .Chart.Name .Values.nameOverride | trunc 63 | trimSuffix "-" }}
{{- end }}

{{- define "microservice.fullname" -}}
{{- if .Values.fullnameOverride }}
{{- .Values.fullnameOverride | trunc 63 | trimSuffix "-" }}
{{- else }}
{{- $name := default .Chart.Name .Values.nameOverride }}
{{- if contains $name .Release.Name }}
{{- .Release.Name | trunc 63 | trimSuffix "-" }}
{{- else }}
{{- printf "%s-%s" .Release.Name $name | trunc 63 | trimSuffix "-" }}
{{- end }}
{{- end }}
{{- end }}

{{- define "microservice.labels" -}}
helm.sh/chart: {{ include "microservice.name" . }}-{{ .Chart.Version | replace "+" "_" }}
{{ include "microservice.selectorLabels" . }}
{{- if .Chart.AppVersion }}
app.kubernetes.io/version: {{ .Chart.AppVersion | quote }}
{{- end }}
app.kubernetes.io/managed-by: {{ .Release.Service }}
{{- end }}

{{- define "microservice.selectorLabels" -}}
app.kubernetes.io/name: {{ include "microservice.name" . }}
app.kubernetes.io/instance: {{ .Release.Name }}
{{- end }}
`);

// 3. deployment.yaml
fs.writeFileSync(path.join(tplDir, 'deployment.yaml'),
`apiVersion: apps/v1
kind: Deployment
metadata:
  name: {{ include "microservice.fullname" . }}
  namespace: {{ .Values.namespace | default "english-learning" }}
  labels:
    {{- include "microservice.labels" . | nindent 4 }}
spec:
  {{- if not .Values.autoscaling.enabled }}
  replicas: {{ .Values.replicaCount }}
  {{- end }}
  selector:
    matchLabels:
      {{- include "microservice.selectorLabels" . | nindent 6 }}
  template:
    metadata:
      labels:
        {{- include "microservice.selectorLabels" . | nindent 8 }}
    spec:
      containers:
      - name: {{ .Chart.Name }}
        image: "{{ .Values.image.repository }}:{{ .Values.image.tag | default .Chart.AppVersion }}"
        imagePullPolicy: {{ .Values.image.pullPolicy }}
        ports:
        - containerPort: {{ .Values.service.port }}
          name: http
        {{- if .Values.env }}
        env:
        {{- range .Values.env }}
        - name: {{ .name }}
          {{- if .value }}
          value: {{ .value | quote }}
          {{- else if .valueFrom }}
          valueFrom:
            {{- toYaml .valueFrom | nindent 12 }}
          {{- end }}
        {{- end }}
        {{- end }}
        resources:
          {{- toYaml .Values.resources | nindent 10 }}
        {{- with .Values.livenessProbe }}
        livenessProbe:
          {{- toYaml . | nindent 10 }}
        {{- end }}
        {{- with .Values.readinessProbe }}
        readinessProbe:
          {{- toYaml . | nindent 10 }}
        {{- end }}
`);

// 4. service.yaml
fs.writeFileSync(path.join(tplDir, 'service.yaml'),
`apiVersion: v1
kind: Service
metadata:
  name: {{ include "microservice.fullname" . }}
  namespace: {{ .Values.namespace | default "english-learning" }}
  labels:
    {{- include "microservice.labels" . | nindent 4 }}
spec:
  type: {{ .Values.service.type }}
  ports:
    - port: {{ .Values.service.port }}
      targetPort: {{ .Values.service.targetPort | default .Values.service.port }}
      protocol: TCP
      name: http
  selector:
    {{- include "microservice.selectorLabels" . | nindent 4 }}
`);

// 5. hpa.yaml
fs.writeFileSync(path.join(tplDir, 'hpa.yaml'),
`{{- if .Values.autoscaling.enabled }}
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: {{ include "microservice.fullname" . }}
  namespace: {{ .Values.namespace | default "english-learning" }}
  labels:
    {{- include "microservice.labels" . | nindent 4 }}
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: {{ include "microservice.fullname" . }}
  minReplicas: {{ .Values.autoscaling.minReplicas }}
  maxReplicas: {{ .Values.autoscaling.maxReplicas }}
  metrics:
  {{- if .Values.autoscaling.targetCPUUtilizationPercentage }}
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: {{ .Values.autoscaling.targetCPUUtilizationPercentage }}
  {{- end }}
{{- end }}
`);

// 6. ingress.yaml
fs.writeFileSync(path.join(tplDir, 'ingress.yaml'),
`{{- if .Values.ingress.enabled -}}
{{- $fullName := include "microservice.fullname" . -}}
{{- $svcPort := .Values.service.port -}}
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: {{ $fullName }}
  namespace: {{ .Values.namespace | default "english-learning" }}
  labels:
    {{- include "microservice.labels" . | nindent 4 }}
spec:
  {{- if .Values.ingress.className }}
  ingressClassName: {{ .Values.ingress.className }}
  {{- end }}
  rules:
    {{- range .Values.ingress.hosts }}
    - host: {{ .host | quote }}
      http:
        paths:
          {{- range .paths }}
          - path: {{ .path }}
            pathType: {{ .pathType }}
            backend:
              service:
                name: {{ $fullName }}
                port:
                  number: {{ $svcPort }}
          {{- end }}
    {{- end }}
{{- end }}
`);

// 7. configmap.yaml
fs.writeFileSync(path.join(tplDir, 'configmap.yaml'),
`{{- if .Values.configMap.enabled }}
apiVersion: v1
kind: ConfigMap
metadata:
  name: {{ include "microservice.fullname" . }}-config
  namespace: {{ .Values.namespace | default "english-learning" }}
  labels:
    {{- include "microservice.labels" . | nindent 4 }}
data:
{{- toYaml .Values.configMap.data | nindent 2 }}
{{- end }}
`);

// 8. values.yaml
fs.writeFileSync(path.join(chartDir, 'values.yaml'),
`replicaCount: 1
image:
  repository: english-learning/microservice
  tag: latest
  pullPolicy: IfNotPresent
namespace: english-learning-dev
service:
  type: ClusterIP
  port: 3000
resources:
  requests:
    cpu: 100m
    memory: 128Mi
  limits:
    cpu: 250m
    memory: 256Mi
livenessProbe:
  httpGet:
    path: /health
    port: http
  initialDelaySeconds: 30
  periodSeconds: 10
readinessProbe:
  httpGet:
    path: /health
    port: http
  initialDelaySeconds: 10
  periodSeconds: 5
autoscaling:
  enabled: false
  minReplicas: 1
  maxReplicas: 5
  targetCPUUtilizationPercentage: 80
ingress:
  enabled: false
configMap:
  enabled: false
  data: {}
`);

// 9. dev environment values
fs.writeFileSync(path.join(devEnvDir, 'auth-service.yaml'),
`replicaCount: 1
image:
  repository: english-learning/auth-service
  tag: dev
namespace: english-learning-dev
service:
  port: 3001
env:
  - name: NODE_ENV
    value: development
  - name: PORT
    value: "3001"
livenessProbe:
  httpGet:
    path: /api/v1/health
    port: 3001
readinessProbe:
  httpGet:
    path: /api/v1/health
    port: 3001
`);

fs.writeFileSync(path.join(devEnvDir, 'user-service.yaml'),
`replicaCount: 1
image:
  repository: english-learning/user-service
  tag: dev
namespace: english-learning-dev
service:
  port: 3002
env:
  - name: NODE_ENV
    value: development
  - name: PORT
    value: "3002"
livenessProbe:
  httpGet:
    path: /api/v1/health
    port: 3002
readinessProbe:
  httpGet:
    path: /api/v1/health
    port: 3002
`);

fs.writeFileSync(path.join(devEnvDir, 'api-gateway.yaml'),
`replicaCount: 1
image:
  repository: english-learning/api-gateway
  tag: dev
namespace: english-learning-dev
service:
  port: 3000
env:
  - name: NODE_ENV
    value: development
  - name: PORT
    value: "3000"
livenessProbe:
  httpGet:
    path: /health
    port: 3000
readinessProbe:
  httpGet:
    path: /health
    port: 3000
`);

// 10. Helper script for validation check
fs.writeFileSync(path.join(helmDir, 'scripts', 'validate.js'),
`const fs = require('fs');
const path = require('path');

const helmPath = path.join(process.cwd(), 'infra', 'helm');
console.log('🔍 Checking Helm Chart structure in:', helmPath);

const requiredFiles = [
  'charts/microservice/Chart.yaml',
  'charts/microservice/values.yaml',
  'charts/microservice/templates/_helpers.tpl',
  'charts/microservice/templates/deployment.yaml',
  'charts/microservice/templates/service.yaml',
  'charts/microservice/templates/hpa.yaml',
  'charts/microservice/templates/ingress.yaml',
  'charts/microservice/templates/configmap.yaml',
  'environments/dev/auth-service.yaml',
  'environments/dev/user-service.yaml',
  'environments/dev/api-gateway.yaml'
];

let allExist = true;
requiredFiles.forEach(file => {
  const p = path.join(helmPath, file);
  if (fs.existsSync(p)) {
    console.log('  ✅ ' + file);
  } else {
    console.log('  ❌ Missing: ' + file);
    allExist = false;
  }
});

if (allExist) {
  console.log('\n🎉 Helm Chart Architecture is 100% Valid and Standardized!');
} else {
  console.log('\n⚠️ Some Helm Chart files are missing.');
}
`);

console.log('✅ setup-helm.js written successfully.');
