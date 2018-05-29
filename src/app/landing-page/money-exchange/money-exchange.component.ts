// Angular
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

// Modules
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

// Models
import { IRateConversion } from './models/rate-conversion';
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

  setCurrencyConfiguration() {
    this.currencyMaskDollar = createNumberMask({
      prefix: '$',
      suffix: '',
      includeThousandsSeparator: true,
      thousandsSeparatorSymbol: ',',
      allowDecimal: true,
      decimalSymbol: '.',
      decimalLimit: 2,
      integerLimit: null,
      requireDecimal: false,
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
      decimalLimit: 2,
      integerLimit: null,
      requireDecimal: false,
      allowNegative: false,
      allowLeadingZeroes: false
    });
  }

  calculateCurrencyExchange(event) {
    event.preventDefault();
    if (!!this.moneyExchangeForm.value.dollarCurrencyInput) {
      this.landingPageService.getCurrency().subscribe(response => {
        const dollarInputValue = this.convertToNumber(this.moneyExchangeForm.value.dollarCurrencyInput);
        const euroConversion = dollarInputValue / response.rates.EUR;
        this.moneyExchangeForm.controls['euroCurrencyInput'].setValue(euroConversion);
      });
    }
  }

  convertToNumber(textToTransform: string) {
    let convertedNumber: number;
    const indexOfComma: number = textToTransform.indexOf(',');
    if (indexOfComma !== -1) {
      const hundreds = textToTransform.slice(indexOfComma + 1, indexOfComma + 5);
      const thousands = textToTransform.slice(1, indexOfComma);
      convertedNumber = Number(thousands + hundreds);
    } else {
      convertedNumber = Number(textToTransform.substr(1, 4));
    }
    return convertedNumber;
  }

}
