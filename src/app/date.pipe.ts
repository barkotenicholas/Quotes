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

    var quoteDate = new Date(value);
    var todayDate = new Date();

    var Difference_In_Time = todayDate.getTime() - quoteDate.getTime();


    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

    var q = Math.ceil(Difference_In_Days);

    const calculateTimimg = (d: number) => {
      let months = 0, years = 0, days = 0, weeks = 0;
      while(d){
         if(d >= 365){
            years++;
            d -= 365;
         }else if(d >= 30){
            months++;
            d -= 30;
         }else if(d >= 7){
            weeks++;
            d -= 7;
         }else{
            days++;
            d--;
         }
      };
      
        return "Years "+ years+" Months "+ months+" Weeks "+ weeks+" Days "+days+" Ago";
      
   };

    return calculateTimimg(q);


  }
}
