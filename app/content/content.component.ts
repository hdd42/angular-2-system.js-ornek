import {Component} from '@angular/core';

@Component({
  selector: 'content-component',
  template: ` 
    <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <section class="content-header">
            <h1>
                Page Header
                <small>Optional description</small>
            </h1>
        </section>

        <!-- Main content -->
        <section class="content">

            <!-- Your Page Content Here -->

        </section>
        <!-- /.content -->
    </div>
  `
})
export class ContentComponent {
  constructor() {
   
  }

}