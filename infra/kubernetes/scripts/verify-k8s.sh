#!/bin/bash
echo "🔍 Validating Kubernetes Manifest Syntax with kubectl dry-run..."
kubectl apply --dry-run=client -k infra/kubernetes/overlays/dev
if [ $? -eq 0 ]; then
  echo "✅ Kubernetes Manifests syntax check PASSED!"
else
  echo "❌ Error in Kubernetes Manifests syntax."
fi
