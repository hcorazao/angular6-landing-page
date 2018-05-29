// Angular
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

// Modules
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

// Models
import { ICurrencyMask } from './models/currency-mask';

// Services
import { LandingPageService } from '../landing-page.service';

@Component({
  selector: 'app-money-exchange',
  templateUrl: './money-exchange.component.html',
  styleUrls: ['./money-exchange.component.scss']
})
export class MoneyExchangeComponent implements OnInit {
  moneyExchangeForm: FormGroup;
  price = 0;
  currencyMaskDollar: ICurrencyMask;
  currencyMaskEuro: ICurrencyMask;


  constructor(
    private formBuilder: FormBuilder,
    private landingPageService: LandingPageService
  ) { }

  ngOnInit() {
    this.buildForm();
    this.setCurrencyConfiguration();
  }

  buildForm() {
    const controls = {
      dollarCurrencyInput: ['', [
        Validators.required
      ]],
      euroCurrencyInput: ['', [
        Validators.required
      ]]
    };
    this.moneyExchangeForm = this.formBuilder.group(controls);

  }

  calculateCurrencyExchange(event) {
    event.preventDefault();
    if (!!this.moneyExchangeForm.value.dollarCurrencyInput) {
      this.landingPageService.getCurrency().subscribe(response => {
        const dollarInputValue = this.convertToNumber(this.moneyExchangeForm.value.dollarCurrencyInput);
        const euroConversion = dollarInputValue*response.rates.EUR;
        this.moneyExchangeForm.controls['euroCurrencyInput'].setValue(euroConversion);
      });
    }
  }

  convertToNumber(textToTransform: string) {
    let convertedNumber: number;
    textToTransform = textToTransform.replace(new RegExp(',', 'g'), '').replace('$', '');
    convertedNumber = Number(textToTransform);
    return convertedNumber;
  }

  setCurrencyConfiguration() {
    this.currencyMaskDollar = createNumberMask({
      prefix: '$',
      suffix: '',
      includeThousandsSeparator: true,
      thousandsSeparatorSymbol: ',',
      allowDecimal: true,
      decimalSymbol: '.',
      decimalLimit: 4,
      integerLimit: null,
      requireDecimal: true,
      allowNegative: false,
      allowLeadingZeroes: false
    });
    this.currencyMaskEuro = createNumberMask({
      prefix: '€',
      suffix: '',
      includeThousandsSeparator: true,
      thousandsSeparatorSymbol: ',',
      allowDecimal: true,
      decimalSymbol: '.',
      decimalLimit: 4,
      integerLimit: null,
      requireDecimal: true,
      allowNegative: false,
      allowLeadingZeroes: false
    });
  }

}
