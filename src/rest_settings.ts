// tslint:disable:typedef
const params = {
  processModelId: ':process_model_id',
};

const paths = {
  importProcessModel: `/import_process_model`,
  undeployProcessModel: `/undeploy_process_model/${params.processModelId}`,
};

/**
 * Contains the endpoints and various rest parameters used by the deployment api.
 */
export const restSettings = {
  /**
   * A collection of all url parameters employed by the deployment api.
   */
  params: params,
  /**
   * A collection of all urls employed by the deployment api.
   */
  paths: paths,
};
