import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'heading'
})
export class HeadingPipe implements PipeTransform {

  transform(value: any, arg: any, type: any): any {
    if (value) {
      const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
      if (seconds < 29) // less than 30 seconds ago will show as 'Just now'
          return 'just now';
      const intervals = {
          'year': 31536000,
          'month': 2592000,
          'week': 604800,
          'day': 86400,
          'hour': 3600,
          ' minute ': 60,
          'second': 1
      };
      let counter;
      for (const i in intervals) {
          counter = Math.floor(seconds / intervals[i]);
          if (counter > 0){
            return counter + ' ' + i + ' ago'; // singular (1 day ago)
          }
      }
    }
    return value;
  }

  

}
