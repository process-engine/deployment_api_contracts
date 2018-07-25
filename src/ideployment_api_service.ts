import {ImportProcessModelRequestPayload} from './data_model';
import {DeploymentContext} from './deployment_context';

/**
 * Manages the deployment of process models. This currently includes the import of process models, either as xml or as file.
 */
export interface IDeploymentApiService {
  /**
   * Imports a process model into the database from the given payload.
   *
   * @async
   * @param context                   The deployment-api specific execution context.
   * @param payload                   The payload that contains all necessary data for the import.
   * @param payload.name              The name under which to save the imported process model.
   * @param payload.xml               The raw xml code of the process model to import.
   * @param payload.overwriteExisting If true, overwrites process models with the same name.
   *                                  Otherwise an error is thrown, if a process model with the same name is already stored.
   *                                  Default is 'true'.
   * @returns                         A Promise, which resolves without content upon success, or rejects an error in case of an error.
   */
  importBpmnFromXml(context: DeploymentContext, payload: ImportProcessModelRequestPayload): Promise<void>;
  /**
   * Imports a process model into the database from a given file path.
   *
   * @async
   * @param context           The deployment-api specific execution context.
   * @param filePath          The path to the file that contains the process model to import.
   * @param name              Optional: The name under which to save the imported process model.
   *                          If not provided, the name of the file containing the process model will be used instead.
   * @param overwriteExisting Optional: If true, overwrites process models with the same name.
   *                          Otherwise an error is thrown, if a process model with the same name is already stored.
   *                          Default is 'true'.
   * @returns                 A Promise, which resolves without content upon success, or rejects an error in case of an error.
   */
  importBpmnFromFile(context: DeploymentContext, filePath: string, name?: string, overwriteExisting?: boolean): Promise<void>;
}
