import {Pipe, PipeTransform} from '@angular/core';
import {Character} from '../models/character';
import {Status} from '../models/status';

// @ts-ignore
@Pipe({
  name: 'filterStatus'
})

export class FilterStatusPipe implements PipeTransform{

  transform(list: Character[], status: Status): Character[]{
    if (!list){
      return null;
    }
    if (status === 'allCharacters'){
      return list;
    }
    return list.filter((item: Character): boolean => item.status.toLocaleLowerCase() === status);
  }
}
