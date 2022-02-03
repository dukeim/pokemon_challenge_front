import { Pipe, PipeTransform } from '@angular/core';
import { Type } from '../interfaces/types';
@Pipe({
  name: 'elementType'
})
export class ElementTypePipe implements PipeTransform {

  transform(value: Type[]): string {
    return  value.map(t => t.type.name.charAt(0).toUpperCase() + t.type.name.slice(1)).join(" / ");
  }

}
