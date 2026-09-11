#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { InfraStack } from '../lib/infra-stack';
import { InfraStackNoDomain } from '../lib/infra-stack-no-domain';
import { STACK_REGION } from '../constants';

const app = new cdk.App();
new InfraStack(app, 'PortfolioInfraStack', {
  env: { region: STACK_REGION },
});
new InfraStackNoDomain(app, 'PortfolioInfraStackNoDomain', {
  env: { region: STACK_REGION },
});
