import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from "rxjs";


export interface Commander {

  id: number;
  title: string;
  tier: string;
  red: string,
  yellow: string,
  blue: string,
  name:string,
  talentTreetreeData:object;
  commanderType:CommanderType;
  commanderTalents:{"activeSkill": ActiveSkill, "passiveSkills": PassiveSkills[]};

  /*
  TODO:
  Create array of the 3 talent types. ie. blue,yellow to leaship etc
   */

  //CommanderType: CommanderType[];

}


export interface CommanderType {
  red: string,
  yellow: string,
  blue: string,
}
export interface ActiveSkill {
  name: string,
  rageRequirement: number,
  text: string,
  upgrade:SkillDetails[]
}
export interface PassiveSkills {
  name: string,
  text: string,
  blue: string,
  rageRequirement: number,
  upgrade:SkillDetails[]

}
export interface SkillDetails {
  name: string,
  bonus: [],
  type: string,
}
@Injectable({
  providedIn: 'root'
})
export class CommandersService {

  constructor(private http:HttpClient) { }


  getCommanders(): Observable<Commander[]> {
    return this.http.get<Commander[]>('/data/commanders.json')
  }
}
