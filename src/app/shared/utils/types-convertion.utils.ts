import { DatePipe } from "@angular/common";

export function isNumber(value: any): boolean {
  return !isNaN(this.toInteger(value));
}

export function isEmail(email: string) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email.toLowerCase());
}

/**
 * Convert string to Date
 *
 * @param dateInStr: string (format => 'MM/dd/yyyy')
 */
export function getDateFromString(dateInStr: string = ''): Date {
  if (dateInStr && dateInStr.length > 0) {
    const dateParts = dateInStr.trim().split('/');
    const year = toInteger(dateParts[2]);
    const month = toInteger(dateParts[0]);
    const day = toInteger(dateParts[1]);
    // tslint:disable-next-line:prefer-const
    let result = new Date();
    result.setDate(day);
    result.setMonth(month - 1);
    result.setFullYear(year);
    return result;
  }

  return new Date();
}

export function dateToSend(_date: Date = new Date()): string {
  let pipe = new DatePipe('en-US');
  return pipe.transform(_date, 'yyyy-MM-dd');
}

export function toInteger(value: any): number {
  return parseInt(`${value}`, 10);
}

export function padNumber(value: number) {
  if (this.isNumber(value)) {
    return `0${value}`.slice(-2);
  } else {
    return '';
  }
}

export function orderAlphabetically(list: any[], field: string): any[] {
  if (list && list.length > 0) {
    return list.sort(function (a, b) {
      return a[field].toLowerCase().localeCompare(b[field].toLowerCase());
    });
  } else {
    return [];
  }
}


