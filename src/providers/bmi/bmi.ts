
import { Injectable } from '@angular/core';


@Injectable()
export class BmiProvider {

  bmiCalculete(height:number,weight:number){
    return (weight / height) / height;
  } 
  

}
