import { ElementRef, Injectable } from '@angular/core';

@Injectable
export class Util {

  public static convertToNumber(textToTransform: string) {
    let convertedNumber: number;
    const indexOfComma: number = textToTransform.indexOf(',');
    if (indexOfComma !== -1) {
      const hundreds = textToTransform.slice(indexOfComma + 1, indexOfComma + 5);
      const thousands = textToTransform.slice(0, indexOfComma);
      convertedNumber = Number(thousands + hundreds);
    } else {
      convertedNumber = Number(textToTransform);
    }
    return convertedNumber;
  }
}
