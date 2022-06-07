import { Commander, ActiveSkill, PassiveSkills } from './../../services/commanders.service';
import { CommanderListData } from './../data-access/commander-list-data';
import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

import {Observable} from "rxjs";
import { CommandersService } from 'src/app/services/commanders.service';

interface opponent {
  troops: number;
}

interface Battle {
  attackStat:  number;
  defenceStat:  number;
  health:  number;
  df:number;
  tl:number;
  startingTroops:number
  troops:number;
  defenceBouns:number,
  healthBouns:number,
  attackBouns:number,
  rage:number,
  proc:boolean;

}

@Component({
  templateUrl: 'commander-list.component.html',
  styleUrls: ['commander-list.component.scss'],
})
export class CommanderListComponent implements OnInit {
  public commandersList$ : Observable<Commander[]> ;

  constructor(private chartsData: CommanderListData,
              private commanderService: CommandersService
  ) {
    this.commandersList$ =   this.commanderService.getCommanders();
    // @ts-ignore
    this.selectedComms=[];
    // @ts-ignore
    this.skillSelected=null;
    this.commanderService.commsSelected.subscribe(data => {
      if(data.add) this.selectedComms.push(data.comm);
      else this.selectedComms = this.selectedComms.filter(item => item.id !== data.comm.id);    });
    this.skillNumber=0;
  }
  public trafficRadioGroup = new FormGroup({
    trafficRadio: new FormControl('Month')
  });
  selectedComms: Commander[] ;
  skillSelected: ActiveSkill | PassiveSkills;
  skillNumber: number ;

  ngOnInit(): void {
  }

}

