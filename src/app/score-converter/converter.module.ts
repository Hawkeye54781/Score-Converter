import { ConverterRoutingModule } from './converter-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConverterComponent } from './converter.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ConverterRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ConverterComponent]
})
export class ConverterModule { }
