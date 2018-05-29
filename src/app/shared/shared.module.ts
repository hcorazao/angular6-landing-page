// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Pipes
import { CurrencyPipe } from './pipes/currency.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  	CurrencyPipe
  ],
  exports: [
  	CurrencyPipe
  ]
})
export class SharedModule { }
