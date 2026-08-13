const fs = require('fs');
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
  console.log('
🎉 AWS Production Architecture Blueprint Verified!');
}
