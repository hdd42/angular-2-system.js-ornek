import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, RouteConfig} from '@angular/router-deprecated';
import {HeaderComponent} from "./header/header.component";
import {AsideSolComponent} from "./asideSol/aside.sol.component";
import {ContentComponent} from "./content/content.component";
import {FooterComponent} from "./footer/footer.component";

@Component({
    selector: 'ornek-uygulama',
    template: ` 
      <header-component></header-component>
      <aside-sol-component></aside-sol-component>
      <content-component></content-component>
      <footer-component></footer-component>      
    `,
    directives: [ROUTER_DIRECTIVES , HeaderComponent, AsideSolComponent, ContentComponent,
    FooterComponent
    ]
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
