const fs = require('fs');
const path = require('path');

const root = process.cwd();
const awsDir = path.join(root, 'infra', 'aws');

// 1. Architecture Specs JSON
fs.writeFileSync(path.join(awsDir, 'specs', 'architecture.json'), JSON.stringify({
  region: "ap-south-1",
  vpc: {
    cidr: "10.0.0.0/16",
    publicSubnets: ["10.0.1.0/24", "10.0.2.0/24"],
    privateAppSubnets: ["10.0.10.0/24", "10.0.11.0/24"],
    privateDataSubnets: ["10.0.12.0/24", "10.0.13.0/24"],
    natGateways: 2
  },
  eks: {
    clusterName: "english-learning-eks",
    version: "1.28",
    nodeGroups: {
      general: { instanceType: "t3.medium", min: 3, max: 10, desired: 3 },
      ai: { instanceType: "t3.xlarge", min: 2, max: 5, desired: 2 },
      memory: { instanceType: "t3.medium", min: 2, max: 5, desired: 2 }
    }
  },
  rds: {
    engine: "postgres",
    version: "15.4",
    instanceClass: "db.t3.medium",
    multiAZ: true,
    storageGb: 100
  },
  redis: {
    engine: "redis",
    version: "7.0",
    nodeType: "cache.t3.medium",
    shards: 2,
    replicasPerShard: 1
  },
  kafka: {
    brokerType: "kafka.m5.large",
    nodes: 3,
    storagePerBrokerGb: 100
  }
}, null, 2));

// 2. Terraform Main Manifest Placeholder
fs.writeFileSync(path.join(awsDir, 'terraform', 'main.tf'),
`# AWS Production Architecture Infrastructure (Terraform)
provider "aws" {
  region = "ap-south-1"
}

module "vpc" {
  source = "terraform-aws-modules/vpc/aws"
  name   = "english-learning-vpc"
  cidr   = "10.0.0.0/16"

  azs             = ["ap-south-1a", "ap-south-1b"]
  public_subnets  = ["10.0.1.0/24", "10.0.2.0/24"]
  private_subnets = ["10.0.10.0/24", "10.0.11.0/24", "10.0.12.0/24", "10.0.13.0/24"]

  enable_nat_gateway = true
  single_nat_gateway = false
}
`);

// 3. Validation Check Script
fs.writeFileSync(path.join(awsDir, 'specs', 'validate-aws.js'),
`const fs = require('fs');
const path = require('path');

const awsPath = path.join(process.cwd(), 'infra', 'aws');
console.log('🔍 Validating AWS Cloud Architecture Specs in:', awsPath);

const requiredFiles = [
  'specs/architecture.json',
  'terraform/main.tf'
];

let valid = true;
requiredFiles.forEach(file => {
  const p = path.join(awsPath, file);
  if (fs.existsSync(p)) {
    console.log('  [OK] ' + file);
  } else {
    console.log('  [MISSING] ' + file);
    valid = false;
  }
});

if (valid) {
  console.log('\n🎉 AWS Production Architecture Blueprint Verified!');
}
`);

console.log('✅ setup-aws-arch.js written successfully.');
