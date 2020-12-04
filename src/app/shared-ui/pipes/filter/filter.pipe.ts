import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(filter:any, keys: string, term: string): any {
    if (!term) return filter;
    return (filter || []).filter((oficinasCoord) => 
      keys.split(',').some(key => 
        oficinasCoord.hasOwnProperty(key) && new RegExp(term, 'gi').test(oficinasCoord[key])
      )
    );
  }
}
