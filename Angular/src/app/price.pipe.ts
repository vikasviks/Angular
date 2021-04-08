import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './product/IProduct';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(value: IProduct[], args: number): IProduct[] {
    if(!args)
    {
      return value;
    }
    return value.filter(
      item=>item.Price>=args
    );
  }

}
