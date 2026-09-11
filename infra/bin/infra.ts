#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { InfraStack } from '../lib/infra-stack';
import { STACK_REGION } from '../constants';

const app = new cdk.App();
new InfraStack(app, 'PortfolioInfraStack', {
  env: { region: STACK_REGION },
});
