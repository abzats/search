import { Pipe, PipeTransform } from '@angular/core';

/**
 * Highlight text
 */

@Pipe({
  name: 'hl'
})
export class HightlightPipe implements PipeTransform {

  transform(value: any, fragment: any): any {
    return value.replace(fragment, '<strong>' + fragment + '</strong>');
  }

}
