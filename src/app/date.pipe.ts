import {
  Pipe,
  PipeTransform
} from '@angular/core';
import {formatDate} from '@angular/common';
@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  transform(value: any): string {

    return formatDate(new Date(value),'yyyy-MM-dd','en-US');
  }
}
