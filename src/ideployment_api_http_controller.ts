import {HttpRequestWithIdentity} from '@essential-projects/http_contracts';

import {Response} from 'express';

/**
 * Contains functions for a HTTP Controller that can be used for accessing
 * the Deployment API.
 */
export interface IDeploymentApiHttpController {

  /**
   * Imports the ProcessModel contained within the request's payload.
   *
   * @async
   * @param request  The HttpRequest object containing all request infos.
   * @param response The HttpResponse object to use for sending a Http response.
   */
  importProcessModel(request: HttpRequestWithIdentity, response: Response): Promise<void>;

  /**
   * Removes the ProcessModel with a matching ProcessModelId.
   * The ProcessModelId is contained within the request parameters.
   *
   * @async
   * @param request  The HttpRequest object containing all request infos.
   * @param response The HttpResponse object to use for sending a Http response.
   */
  undeployProcessModel(request: HttpRequestWithIdentity, response: Response): Promise<void>;
}
