import { PermissionBase } from './PermissionBase';
import { Auth } from 'src/app/core/model/auth';
import { AdminPermission } from './adminpermission';
import { SimpleUserPermission } from './simpleuserPermission';
import { UnknownPermission } from './unknownpermission';
import { AuthService } from 'src/app/services/auth.service';

export class PermissionsFactory {
  public static instance: PermissionBase;
  private constructor() {}
  public static getInstance(authRole: string): PermissionBase {

    if (this.instance) {
      console.log('istanza nulla');
      return this.instance;
    } else {
      const role = authRole;
      switch(role) {
        case "ADMIN":
          this.instance = new AdminPermission();
          console.log("ADMIN")

          break;
        case "SIMPLEUSER":
          this.instance = new SimpleUserPermission();
          console.log("SIMPLEUSER")

          break;
      
        default:
          this.instance = new UnknownPermission();
          console.log("DEFAULT")
          break;
      }
    }
    
    return this.instance;
  }
}