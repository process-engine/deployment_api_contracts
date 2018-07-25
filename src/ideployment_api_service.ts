import {ImportProcessModelRequestPayload} from './data_model';
import {DeploymentContext} from './deployment_context';

export interface IDeploymentApiService {
  importBpmnFromXml(context: DeploymentContext, payload: ImportProcessModelRequestPayload): Promise<void>;
  importBpmnFromFile(context: DeploymentContext, filePath: string, overwriteExisting?: boolean): Promise<void>;
}
