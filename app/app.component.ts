import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, RouteConfig} from '@angular/router-deprecated';


@Component({
    selector: 'ornek-uygulama',
    template: `
    <h2>Angular {{version}} </h2>
    `,
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    // { path: '/', redirectTo: ['Dashboard'] },
])
export class AppComponent {
    version:string = ''

    constructor() {
        this.version = '2';
    }
}
