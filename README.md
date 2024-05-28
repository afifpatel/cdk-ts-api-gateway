
# AWS CDK Project

This project uses the AWS Cloud Development Kit (CDK) with TypeScript for provisioning AWS resources.

It sets up:

- API Gateway
- Lambda function. 

The api gateway routes request to corresponding lambda function which handles the request.

## Features

- Provisions an API Gateway.
- Provisions a Lambda
- Rest endpoint created with Lambda function

## Prerequisites

- AWS account.
- AWS CDK installed.
- Node.js installed
## Setup

1. Clone the repository:
```
git clone https://github.com/afifpatel/aws-cdk-project.git
cd aws-cdk-project
```

2. Install dependancies:

```
npm install
```

3. Deploy the stack:

```
cdk deploy
```
