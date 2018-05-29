// Angular
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

// Modules

// Models

// Services
import { LandingPageService } from '../landing-page.service';

@Component({
  selector: 'app-money-exchange',
  templateUrl: './money-exchange.component.html',
  styleUrls: ['./money-exchange.component.scss']
})
export class MoneyExchangeComponent implements OnInit {
  moneyExchangeForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private landingPageService: LandingPageService
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    const controls = {
      dollarCurrencyInput: ['', [
        Validators.required
      ]],
      euroCurrencyInput: ['', [

      ]]
    };
    this.moneyExchangeForm = this.formBuilder.group(controls);

  }

  calculateCurrencyExchange(event) {
    event.preventDefault();
    console.log('calculate');
    console.log('dollarCurrencyInput', this.moneyExchangeForm.value.dollarCurrencyInput);
    console.log('euroCurrencyInput', this.moneyExchangeForm.value.euroCurrencyInput);
    this.landingPageService.getCurrency().subscribe(response => {
      const euroConversion = this.moneyExchangeForm.value.dollarCurrencyInput / response.rates.EUR;
      this.moneyExchangeForm.controls['euroCurrencyInput'].setValue(euroConversion);
    });
  }

}
