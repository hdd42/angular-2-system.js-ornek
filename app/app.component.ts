import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';


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
  version: string = ''
  constructor() {
    this.version = '2';
  }
}
