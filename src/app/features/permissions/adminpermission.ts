import { PermissionBase } from './PermissionBase';
import { PermissionType } from './PermissionType';



export class AdminPermission extends PermissionBase{
    
    constructor(){
        super();
        this.permissionsss = [
            PermissionType.ReadGuida            
        ];
        console.log(this.permissionsss);
        
    }
}