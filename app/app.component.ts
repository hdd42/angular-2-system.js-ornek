import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, RouteConfig} from '@angular/router-deprecated';

@Component({
    selector: 'ornek-uygulama',
    template: ` 
        
    `,
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    // { path: '/', redirectTo: ['Dashboard'] },
   // { path: '/dashboard', name: 'Dashboard', component: DashboardComponent },

])
export class AppComponent {
    version:string = ''

    constructor() {
        this.version = '2';

    }

}
