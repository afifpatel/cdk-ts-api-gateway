import { ICdkTsApiGatewayStackProps } from "./stack-config-types";

const environmentConfig: ICdkTsApiGatewayStackProps = {
    tags: {
        Developer: 'Afif Patel',
        Application: 'CdkTsApiGateway'
    },
    lambda: {
        name: 'lambda-apig-resolver',
        desc: 'Lambda resolver used for Api Gateway',
        memory: 128,
        timeout: 30,
    },
    api: {
        name: 'rest-api',
        desc: 'Rest Api Gateway used for Api Gateway',
        modelName: 'RestApiModel',
        rootResource: 'v1'
    },
    usageplan: {
        name: 'usage-plan',
        desc: 'Usage Plan for Api Gateway',
        limit: 100, // 100 requests per day
        rateLimit: 20,
        burstLimit: 5
    },
    apiKey: {
        name: 'api-key',
        desc: 'Api Key for Api Gateway'
    },
    validators: {
        bodyValidators: {
            requestValidatorName: 'body-validator',
            validateRequestBody: true,
            validateRequestParameters: false
        },
        paramValidators: {
            requestValidatorName: 'param-validator',
            validateRequestBody: false,
            validateRequestParameters: true
        },
        bodyAndParamValidators: {
            requestValidatorName: 'body-and-param-validator',
            validateRequestBody: true,
            validateRequestParameters: true
        }
    },
}

export default environmentConfig;