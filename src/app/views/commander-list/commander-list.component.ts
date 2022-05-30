import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { CommanderListData, IChartProps } from './commander-list-data';
import {ActiveSkill, Commander, CommandersService, PassiveSkills} from "../../services/commanders.service";
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
  troops:number;
  defenceBouns:number,
  healthBouns:number,
  attackBouns:number,
}

@Component({
  templateUrl: 'commander-list.component.html',
  styleUrls: ['commander-list.component.scss']
})
export class CommanderListComponent implements OnInit {
  public commandersList$ : Observable<Commander[]> ;
  constructor(private chartsData: CommanderListData,
              private commanderService: CommandersService
  ) {
    this.battleLog=[];
    this.commandersList$ =   this.commanderService.getCommanders();
    // @ts-ignore
    this.selectedComms=null;
    // @ts-ignore
    this.skillSelected=null;
    this.human={
      attackStat:  240,
      defenceStat:  237.12,
      health:  210.375,
      defenceBouns:5,
      healthBouns:5,
      attackBouns:5,
      df:0,
      tl:0,
      troops:4197};
    this.AI={
      attackStat:  240,
      defenceStat:  238.08,
      health:  208.505,
      defenceBouns:5,
      healthBouns:5,
      attackBouns:5,
      df:0,
      tl:0,
      troops:11012};
    this.simulator={troops:1000};
    this.skillNumber=0;
  }
  public simulator: opponent;
  public mainChart: IChartProps = {};
  public chart: Array<IChartProps> = [];
  public trafficRadioGroup = new FormGroup({
    trafficRadio: new FormControl('Month')
  });
  selectedComms: Commander ;
  skillSelected: ActiveSkill | PassiveSkills;
  skillNumber: number ;

  ngOnInit(): void {
    this.initCharts();

  }

  initCharts(): void {
    this.mainChart = this.chartsData.mainChart;
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
  attack(){

//    this.simulator.troops--;
    // if(this.simulator.troops > 0)  this.simulator.troops--;

    while (this.human.troops > 1 && this.AI.troops > 1) {
      this.calculateDF(this.human,this.AI);
      this.calculateDF(this.AI,this.human);
      this.calculateTL(this.human,this.AI);
      this.calculateTL(this.AI,this.human);
      this.killTroops();
      this.turnCount++;
      this.battleLog.push({turn:this.turnCount, troopsLeftHuman:this.human.troops,troopsLeftAI:this.AI.troops });
      this.attack();
    }
    this.turnCount=0;
    //  console.log("HUMAN",this.human);
    //  console.log("AI",this.AI);


  }
  reset(){
    this.human.troops=10000;
    this.AI.troops=10000;
    this.battleLog=[];

  }
  calculateDF(simYou: Battle, simOpp:Battle){
    let calculatedAttack = simYou.attackStat + ((simYou.attackStat * simYou.attackBouns) /100)
    let calculatedDefence = simOpp.defenceStat + ((simOpp.defenceStat * simOpp.defenceBouns) /100)

    simYou.df = (simYou.troops * calculatedAttack)/calculatedDefence;
    console.log(calculatedAttack,calculatedDefence);
  }
  calculateTL(simYou: Battle, simOpp:Battle){
    let calculatedHealth = simOpp.health + ((simOpp.health * simOpp.healthBouns) /100)
    simYou.tl = Math.round((simYou.df/calculatedHealth)) | 1;
    // sim.troops=sim.troops- sim.tl;
    //console.log( Math.round((sim.df/calculatedHealth)));
  }
  killTroops(){
    // Math.sqrt(10000);
    console.log(this.AI.tl * (Math.sqrt(10000 /4197)));


    let humanTroops = Math.round(this.AI.tl * (Math.sqrt(10000 /this.AI.troops))) | 0;
    let AIToops=Math.round(this.human.tl * (Math.sqrt(10000/this.human.troops))) |0;

    this.human.troops = this.human.troops - humanTroops > 0 ? this.human.troops - humanTroops : 0;
    this.AI.troops = this.AI.troops-AIToops > 0 ? this.AI.troops- AIToops : 0;


  }
}

