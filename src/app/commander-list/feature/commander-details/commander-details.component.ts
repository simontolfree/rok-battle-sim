import { ActiveSkill, Commander, PassiveSkills, CommandersService } from '../../../services/commanders.service';
import {Component, Input, OnInit} from '@angular/core';
import {Observable, Subject} from "rxjs";

@Component({
  selector: 'app-commander-details',
  templateUrl: './commander-details.component.html',
  styleUrls: ['./commander-details.component.scss'
]
})
export class CommanderDetailsComponent implements OnInit {

  @Input('commanderList$')commanderList$: Observable<Commander[]> | undefined ;
  selectedComms: Commander ;
  skillSelected: ActiveSkill | PassiveSkills;
  skillNumber:number;

  commsSelected = new Subject<any>();
  public comms: Commander[] = [];

  constructor(private cs: CommandersService) {
    // @ts-ignore
    this.selectedComms=null;
    // @ts-ignore
    this.skillSelected=null;
    this.skillNumber=0;
    this.cs.commsSelected.subscribe(data => {
      if(data.add) this.comms.push(data.comm);
      else this.comms = this.comms.filter(item => item.id !== data.comm.id);

    });


  }

  addCommader(comm: Commander) {
    // @ts-ignore
    if(this.comms.length >=2 && !this.isSelected(comm.id))return false;

    if (this.isSelected(comm.id))this.cs.addCommader(comm);
    else this.cs.removeCommander(comm);
  return true;
  }

  ngOnInit(): void {
  }

  isSelected(id: number){
    return this.comms.find(x => x.id === id);
  }


}
