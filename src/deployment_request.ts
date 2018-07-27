import {Request} from 'express';
import {DeploymentContext} from './deployment_context';

/**
 * Extends the base HttpRequest object to include content exlusive to the deployment api.
 */
export interface DeploymentRequest extends Request {
  /**
   * Contains the user specific context with which a user is performing requests against the deployment api.
   */
  deploymentContext: DeploymentContext;
}
