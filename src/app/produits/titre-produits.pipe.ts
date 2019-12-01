import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titreProduits'
})
export class TitreProduitsPipe implements PipeTransform {

  transform(titre:string): string {
    return "- "+titre+" -";
  }

}
