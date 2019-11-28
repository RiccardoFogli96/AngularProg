import { Injectable } from '@angular/core';
import { PermissionBase } from '../features/permissions/PermissionBase';
import { PermissionType } from '../features/permissions/PermissionType';
import { PermissionsFactory } from '../features/permissions/permissionfactory';
import { AuthService } from './auth.service';
import { Session } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class PermissionManagerService {
  private permissions: PermissionBase;  //autorizzazioni
  constructor(private authService: AuthService) { 

    }

  isGranted(permission: PermissionType) {
    console.log('1');
    let authRole = this.authService.getRoleAuth();
    let permissions = PermissionsFactory.getInstance(authRole).permissionsss;
      
      for (let perm of permissions) {
        if (perm === permission){
          return true;
        
        }
      
    }
    return false;
  }
  authAs(role: string) {
    let authRole = this.authService.getRoleAuth();    
    console.log('2');
    this.permissions = PermissionsFactory.getInstance(authRole);
  }
}