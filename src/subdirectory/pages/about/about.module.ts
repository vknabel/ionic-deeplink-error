import { AboutPage } from './about';
import { IonicPageModule } from 'ionic-angular';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    IonicPageModule.forChild(AboutPage)
  ],
  declarations: [AboutPage],
  entryComponents: [AboutPage]
})
export class AboutModule { }
