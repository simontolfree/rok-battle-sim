import { Commander, CommandersService, ActiveSkill, PassiveSkills } from './../../services/commanders.service';
import { BattleListData } from './battle-sim-data';
import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

import {Observable} from "rxjs";

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
  templateUrl: 'battle-sim.component.html',
  styleUrls: ['battle-sim.component.scss'],
})
export class BattleSimComponent implements OnInit {
  public commandersList$ : Observable<Commander[]> ;

  constructor(private chartsData: BattleListData,
              private commanderService: CommandersService
  ) {
    this.battleLog=[];
    this.commandersList$ =   this.commanderService.getCommanders();
    // @ts-ignore
    this.selectedComms=[];
    // @ts-ignore
    this.skillSelected=null;
    this.human={
      attackStat:  110,
      defenceStat:  237.12,
      health:  210.375,
      defenceBouns:5,
      healthBouns:5,
      attackBouns:5,
      df:0,
      tl:0,
      troops:4197,
      startingTroops:4197,
      rage:0,
      proc:false

    };
    this.AI={
      attackStat:  110,
      defenceStat:  238.08,
      health:  208.505,
      defenceBouns:5,
      healthBouns:5,
      attackBouns:5,
      df:0,
      tl:0,
      startingTroops:11012,
      troops:11012,
      rage:0,
      proc:false
    };

    this.commanderService.commsSelected.subscribe(data => {
      if(data.add) this.selectedComms.push(data.comm);
      else this.selectedComms = this.selectedComms.filter(item => item.id !== data.comm.id);    });


    this.simulator={troops:1000};
    this.skillNumber=0;
  }
  public simulator: opponent;

  public trafficRadioGroup = new FormGroup({
    trafficRadio: new FormControl('Month')
  });
  selectedComms: Commander[] ;
  skillSelected: ActiveSkill | PassiveSkills;
  skillNumber: number ;

  ngOnInit(): void {
    this.initCharts();

  }

  initCharts(): void {
    //this.mainChart = this.chartsData.mainChart;
  }

  setTrafficPeriod(value: string): void {
    this.trafficRadioGroup.setValue({ trafficRadio: value });
    this.chartsData.initMainChart(value);
    this.initCharts();
  }
  human:Battle;
  AI:Battle
  turnCount=0;
  battleLog: any;
  async attack() {

//    this.simulator.troops--;
    // if(this.simulator.troops > 0)  this.simulator.troops--;

    while (this.human.troops > 1 && this.AI.troops > 1) {
      this.calculateDF(this.human, this.AI);
      this.calculateDF(this.AI, this.human);
      this.calculateTL(this.human, this.AI);
      this.calculateTL(this.AI, this.human);
      this.killTroops();
      this.turnCount++;
      this.battleLog.push({turn: this.turnCount, troopsLeftHuman: this.human.troops, troopsLeftAI: this.AI.troops});

      await new Promise<void>(r => setTimeout(() => r(), 1000));
      await this.attack();

    }
    this.turnCount = 0;

  }
  reset(){
    this.human.troops=10000;
    this.AI.troops=10000;


  }
  calculateDF(simYou: Battle, simOpp:Battle){
    let calculatedAttack = simYou.attackStat + ((simYou.attackStat * simYou.attackBouns) /100)
    let calculatedDefence = simOpp.defenceStat + ((simOpp.defenceStat * simOpp.defenceBouns) /100)

    simYou.df = (simYou.troops * calculatedAttack)/calculatedDefence;
  }
  calculateTL(simYou: Battle, simOpp:Battle){
    let calculatedHealth = simOpp.health + ((simOpp.health * simOpp.healthBouns) /100)
    simYou.tl = Math.round((simYou.df/calculatedHealth)) | 1;

  }

  killTroops(){
    let humanTroops = Math.round(this.AI.tl * (Math.sqrt(10000 /this.AI.troops))) | 0;
    let AIToops=Math.round(this.human.tl * (Math.sqrt(10000/this.human.troops))) |0;
    this.human.troops = this.human.troops - humanTroops > 0 ? this.human.troops - humanTroops : 0;
    this.AI.troops = this.AI.troops-AIToops > 0 ? this.AI.troops- AIToops : 0;
    this.addRage();
  }
  addRage(){

    if(this.human.rage > 1000) {
      this.human.rage = this.human.rage % 1000 ;
    }
    if(this.AI.rage > 1000)  {
      this.AI.rage = this.AI.rage % 1000;
    }
    this.human.rage += 60;
    this.AI.rage += 20;
    this.human.proc=false;
    this.AI.proc=false;

    if(this.human.rage > 1000) {
      this.human.proc=true;
    }
    if(this.AI.rage > 1000)  {
      this.AI.proc=true;
    }
  }
  getPercentClass(army : Battle) : string{
    let calcualtePercentLost =   ((army.startingTroops - army.troops)/ army.startingTroops) * 100 ;
    console.log(calcualtePercentLost);
      if(calcualtePercentLost >= 0 && calcualtePercentLost <= 51) {
      return 'success';
    }
    if(calcualtePercentLost >= 50 && calcualtePercentLost <= 75) {
      return 'warning'
    }
    if(calcualtePercentLost > 75) {
      return 'danger'
    }

    return 'success';
  }


}

