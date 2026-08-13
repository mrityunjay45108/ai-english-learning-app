const fs = require('fs');
const path = require('path');

const root = process.cwd();
const k8sDir = path.join(root, 'infra', 'kubernetes');

// 1. Namespaces
fs.writeFileSync(path.join(k8sDir, 'base', 'namespace.yaml'),
`apiVersion: v1
kind: Namespace
metadata:
  name: english-learning
---
apiVersion: v1
kind: Namespace
metadata:
  name: english-learning-dev
---
apiVersion: v1
kind: Namespace
metadata:
  name: english-learning-staging
---
apiVersion: v1
kind: Namespace
metadata:
  name: english-learning-monitoring
`);

// 2. ConfigMap
fs.writeFileSync(path.join(k8sDir, 'base', 'configmap.yaml'),
`apiVersion: v1
kind: ConfigMap
metadata:
  name: app-config
  namespace: english-learning
data:
  NODE_ENV: production
  LOG_LEVEL: info
  API_GATEWAY_URL: http://api-gateway:3000
  AUTH_SERVICE_URL: http://auth-service:3001
  USER_SERVICE_URL: http://user-service:3002
  COURSE_SERVICE_URL: http://course-service:3003
  SPEECH_SERVICE_URL: http://speech-service:3012
  REAL_TIME_SERVICE_URL: http://realtime-service:3019
  REDIS_HOST: redis-service
  REDIS_PORT: "6379"
  POSTGRES_HOST: postgres-service
  POSTGRES_PORT: "5432"
  POSTGRES_DB: english_learning_db
`);

// 3. Secrets Template
fs.writeFileSync(path.join(k8sDir, 'base', 'secrets.yaml'),
`apiVersion: v1
kind: Secret
metadata:
  name: app-secrets
  namespace: english-learning
type: Opaque
data:
  JWT_SECRET: ZGV2LXNlY3JldC1rZXk= # base64 for dev-secret-key
---
apiVersion: v1
kind: Secret
metadata:
  name: db-secrets
  namespace: english-learning
type: Opaque
data:
  DATABASE_URL: cG9zdGdyZXNxbDovL2VuZ2xpc2hfdXNlcjplbmdsaXNoX3Bhc3N3b3JkQHBvc3RncmVzLXNlcnZpY2U6NTQzMi9lbmdsaXNoX2xlYXJuaW5nX2Ri
`);

// 4. Ingress
fs.writeFileSync(path.join(k8sDir, 'base', 'ingress.yaml'),
`apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: api-ingress
  namespace: english-learning
  annotations:
    nginx.ingress.kubernetes.io/rewrite-target: /
    nginx.ingress.kubernetes.io/ssl-redirect: "true"
spec:
  ingressClassName: nginx
  rules:
  - host: api.englishlearning.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: api-gateway
            port:
              number: 3000
`);

// 5. Auth Service Deployment + Service + HPA
fs.writeFileSync(path.join(k8sDir, 'services', 'auth-service', 'deployment.yaml'),
`apiVersion: apps/v1
kind: Deployment
metadata:
  name: auth-service
  namespace: english-learning
  labels:
    app: auth-service
spec:
  replicas: 3
  selector:
    matchLabels:
      app: auth-service
  template:
    metadata:
      labels:
        app: auth-service
    spec:
      containers:
      - name: auth-service
        image: english-learning/auth-service:latest
        imagePullPolicy: IfNotPresent
        ports:
        - containerPort: 3001
        envFrom:
        - configMapRef:
            name: app-config
        resources:
          requests:
            memory: "256Mi"
            cpu: "250m"
          limits:
            memory: "512Mi"
            cpu: "500m"
        livenessProbe:
          httpGet:
            path: /api/v1/health
            port: 3001
          initialDelaySeconds: 30
          periodSeconds: 10
        readinessProbe:
          httpGet:
            path: /api/v1/health
            port: 3001
          initialDelaySeconds: 10
          periodSeconds: 5
---
apiVersion: v1
kind: Service
metadata:
  name: auth-service
  namespace: english-learning
spec:
  selector:
    app: auth-service
  ports:
  - port: 3001
    targetPort: 3001
  type: ClusterIP
---
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: auth-service-hpa
  namespace: english-learning
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: auth-service
  minReplicas: 3
  maxReplicas: 10
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 70
`);

// 6. API Gateway Deployment + Service + HPA
fs.writeFileSync(path.join(k8sDir, 'services', 'api-gateway', 'deployment.yaml'),
`apiVersion: apps/v1
kind: Deployment
metadata:
  name: api-gateway
  namespace: english-learning
spec:
  replicas: 3
  selector:
    matchLabels:
      app: api-gateway
  template:
    metadata:
      labels:
        app: api-gateway
    spec:
      containers:
      - name: api-gateway
        image: english-learning/api-gateway:latest
        imagePullPolicy: IfNotPresent
        ports:
        - containerPort: 3000
        envFrom:
        - configMapRef:
            name: app-config
        resources:
          requests:
            memory: "256Mi"
            cpu: "250m"
          limits:
            memory: "512Mi"
            cpu: "500m"
        livenessProbe:
          httpGet:
            path: /health
            port: 3000
          initialDelaySeconds: 30
          periodSeconds: 10
        readinessProbe:
          httpGet:
            path: /health
            port: 3000
          initialDelaySeconds: 10
          periodSeconds: 5
---
apiVersion: v1
kind: Service
metadata:
  name: api-gateway
  namespace: english-learning
spec:
  selector:
    app: api-gateway
  ports:
  - port: 3000
    targetPort: 3000
  type: ClusterIP
---
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: api-gateway-hpa
  namespace: english-learning
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: api-gateway
  minReplicas: 3
  maxReplicas: 15
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 60
`);

// 7. Kustomization Overlay for Dev
fs.writeFileSync(path.join(k8sDir, 'overlays', 'dev', 'kustomization.yaml'),
`apiVersion: kustomize.config.k8s.io/v1beta1
kind: Kustomization
namespace: english-learning-dev
resources:
  - ../../base/namespace.yaml
  - ../../base/configmap.yaml
  - ../../base/secrets.yaml
  - ../../base/ingress.yaml
  - ../../services/auth-service/
  - ../../services/api-gateway/
patches:
  - target:
      kind: Deployment
      name: auth-service
    patch: |
      - op: replace
        path: /spec/replicas
        value: 1
  - target:
      kind: Deployment
      name: api-gateway
    patch: |
      - op: replace
        path: /spec/replicas
        value: 1
`);

// 8. Verification Shell Script
fs.writeFileSync(path.join(k8sDir, 'scripts', 'verify-k8s.sh'),
`#!/bin/bash
echo "🔍 Validating Kubernetes Manifest Syntax with kubectl dry-run..."
kubectl apply --dry-run=client -k infra/kubernetes/overlays/dev
if [ $? -eq 0 ]; then
  echo "✅ Kubernetes Manifests syntax check PASSED!"
else
  echo "❌ Error in Kubernetes Manifests syntax."
fi
`);

console.log('✅ setup-k8s.js written successfully.');
