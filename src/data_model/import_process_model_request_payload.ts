/**
 * Contains all the information necessary to perform a process model import.
 */
export class ImportProcessModelRequestPayload {
  /**
   * The name under which to import the process model.
   */
  public name: string;
  /**
   * The raw xml code of the process model to import.
   */
  public xml: string;
  /**
   * If set to true, the import will overwrite existing process models with the same name.
   * If set to false, attempting to overwrite an already existing process model will cause an error.
   */
  public overwriteExisting?: boolean;
}
