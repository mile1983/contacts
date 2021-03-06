import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
 name: 'filterByNames'
})
export class FilterByNamesPipe implements PipeTransform {

 transform(array: any[], searchTerm?: any): any {
   searchTerm = searchTerm.toLowerCase();

   return array.filter(function (item) {
     return item.firstName.toLowerCase().includes(searchTerm);
   });
 }

}