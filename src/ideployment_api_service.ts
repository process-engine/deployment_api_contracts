import {DeploymentContext} from './deployment_context';
import {ImportProcessModelRequestPayload} from './data_model';

export interface IDeploymentApiService {
  importBpmnFromXml(context: DeploymentContext, payload: ImportProcessModelRequestPayload, overwriteExisting?: boolean): Promise<void>;
  importBpmnFromFile(context: DeploymentContext, filePath: string, overwriteExisting?: boolean): Promise<void>;
}
