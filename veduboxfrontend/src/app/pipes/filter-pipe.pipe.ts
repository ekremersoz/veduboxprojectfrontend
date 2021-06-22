import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../modules/course';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: Course[], filterText:string): Course[] {
    filterText = filterText?filterText.toLocaleUpperCase():"";
    return filterText?value.filter((c:Course)=>c.courseName.toLocaleUpperCase().indexOf(filterText)!==-1):value;
  }

}
