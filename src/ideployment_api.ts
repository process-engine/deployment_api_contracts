import {ImportProcessDefinitionsRequestPayload} from './data_model';

import {IIdentity} from '@essential-projects/iam_contracts';

/**
 * Manages the deployment of process definitions. This currently includes the import of process definitions, either as xml or as file.
 */
export interface IDeploymentApi {

  /**
   * Imports process definitions into the database from the given payload.
   *
   * @async
   * @param identity                  The requesting users identity.
   * @param payload                   The payload that contains all necessary data for the import.
   * @param payload.name              The name under which to save the imported process definitions.
   * @param payload.xml               The raw xml code of the process definitions to import.
   * @param payload.overwriteExisting If true, overwrites process definitions with the same name.
   *                                  Otherwise an error is thrown, if process definitions with the same name is already stored.
   *                                  Default is 'true'.
   */
  importBpmnFromXml(identity: IIdentity, payload: ImportProcessDefinitionsRequestPayload): Promise<void>;

  /**
   * Imports process definitions into the database from a given file path.
   *
   * @async
   * @param identity          The requesting users identity.
   * @param filePath          The path to the file that contains the process model to import.
   * @param name              Optional: The name under which to save the imported process definitions.
   *                          If not provided, the name of the file containing the process definitions will be used instead.
   * @param overwriteExisting Optional: If true, overwrites process definitions with the same name.
   *                          Otherwise an error is thrown, if process definitions with the same name is already stored.
   *                          Default is 'true'.
   */
  importBpmnFromFile(identity: IIdentity, filePath: string, name?: string, overwriteExisting?: boolean): Promise<void>;

  /**
   * Removes the ProcesssModel with the given ID and all references to it.
   *
   * @async
   * @param identity       The requesting users identity.
   * @param processModelId The ID of the ProcessModel to undeploy.
   */
  undeploy(identity: IIdentity, processModelId: string): Promise<void>;
}
