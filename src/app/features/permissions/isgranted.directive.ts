import { Directive, Input, TemplateRef, ViewContainerRef, Output,  ElementRef, EventEmitter, HostListener  } from '@angular/core';
import { PermissionManagerService } from 'src/app/services/permissionmanager.service';
import { PermissionType } from './PermissionType';



@Directive({
  selector: '[appIsGranted]'
})
export class IsGrantedDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private permissionManagerS: PermissionManagerService,
    private elem: ElementRef
  ) { }


  @Input() set appIsGranted(permission: PermissionType) {
    if(permission)
      this.isGranted(permission);
  }

  @Output('aggiorna') aggiornaNav: EventEmitter<PermissionType> = new EventEmitter();

  
  private isGranted(permission: PermissionType) {
    if (this.permissionManagerS.isGranted(permission)) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

 

}