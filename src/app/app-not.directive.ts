import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';


@Directive({
  selector: '[appNot]'
})
export class AppNotDirective {

  flag:Boolean=false;
  constructor(private templateRef: TemplateRef<any>,private viewContainer: ViewContainerRef)
   {
       
    }
      @Input() set appNot(flag) {
          if (flag) {
              this.viewContainer.createEmbeddedView(this.templateRef);
          } else {
              this.viewContainer.clear();        }
      }

}
