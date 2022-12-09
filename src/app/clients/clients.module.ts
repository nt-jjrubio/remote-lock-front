import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsComponent } from './clients.component';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [
    ClientsComponent
  ],
  exports: [
    ClientsComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    RippleModule,
    CardModule
  ],
  providers: [

  ]
})
export class ClientsModule { }
