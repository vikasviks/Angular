import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './product/IProduct';

@Pipe({
  name: 'custompipe1'
})
export class Custompipe1Pipe implements PipeTransform {

  transform(value: IProduct[], args: string): IProduct[] {
    if(!args)
    {
      return value;
    }
    return value.filter(
      item=>item.Title.toLowerCase().indexOf(args.toLowerCase())>-1)
  }

}
