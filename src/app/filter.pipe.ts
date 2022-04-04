import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false,
})
export class FilterPipe implements PipeTransform {
  transform(value: any[], selStatus: string): any[] {
    if (!selStatus.length) return value;

    let newServers = []; // =new Array();
    for (const serv of value) {
      if (serv['status'] == selStatus) newServers.push(serv);
    }
    return newServers;
  }
}
