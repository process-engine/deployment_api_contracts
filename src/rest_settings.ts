// tslint:disable:typedef
const params = {
  processModelId: ':process_model_id',
};

const paths = {
  importProcessModel: `/import_process_model`,
  undeployProcessModel: `/undeploy_process_model/${params.processModelId}`,
};

export const restSettings = {
  params: params,
  paths: paths,
};
