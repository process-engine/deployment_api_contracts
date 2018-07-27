/**
 * Contains information about the requesting user.
 */
export class DeploymentContext {
  /**
   * Contains the users identity. This is usually an auth token, created by an external authority.
   */
  public identity: string;
  /**
   * Contains the users language settings.
   */
  public internationalization?: string;
  /**
   * Contains the users locale settings.
   */
  public localization?: string;
}
