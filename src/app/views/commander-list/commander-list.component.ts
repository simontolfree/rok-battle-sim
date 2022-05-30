import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { CommanderListData, IChartProps } from './commander-list-data';
import {Commander, CommandersService} from "../../services/commanders.service";
import {Observable} from "rxjs";

interface IUser {
  name: string;
  state: string;
  registered: string;
  country: string;
  usage: number;
  period: string;
  payment: string;
  activity: string;
  avatar: string;
  status: string;
  color: string;
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
    this.commandersList$ =   this.commanderService.getCommanders();
    // @ts-ignore
    this.selectedComms=null;
    console.log(this.commandersList$);
  }

  public mainChart: IChartProps = {};
  public chart: Array<IChartProps> = [];
  public trafficRadioGroup = new FormGroup({
    trafficRadio: new FormControl('Month')
  });
  selectedComms: Commander ;

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
}
