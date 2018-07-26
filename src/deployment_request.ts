import {Request} from 'express';
import {DeploymentContext} from './deployment_context';

export interface DeploymentRequest extends Request {
  deploymentContext: DeploymentContext;
}
