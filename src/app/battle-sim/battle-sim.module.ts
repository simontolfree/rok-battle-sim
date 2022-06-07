import { CommanderDetailsModule } from './../commander-list/commander-details/commander-details.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {
  AvatarModule,
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  FormModule,
  GridModule,
  NavModule,
  ProgressModule,
  TableModule,
  TabsModule
} from '@coreui/angular';
import { ChartjsModule } from '@coreui/angular-chartjs';
import { WidgetsModule } from '../shared/widgets/widgets.module';
import {BattleSimComponent} from "./battle-sim.component";
import { BattleSimComponentRoutingModule } from './battle-sim-routing.module';
import { CommanderDetailsComponent } from '../commander-list/commander-details/commander-details.component';

@NgModule({
  imports: [
    BattleSimComponentRoutingModule,
    CommanderDetailsModule,
    CardModule,
    NavModule,
    TabsModule,
    CommonModule,
    GridModule,
    ProgressModule,
    ReactiveFormsModule,
    ButtonModule,
    FormModule,
    ButtonModule,
    ButtonGroupModule,
    ChartjsModule,
    AvatarModule,
    TableModule,
    WidgetsModule,
    FormsModule
  ],
  declarations: [BattleSimComponent]
})
export class BattleSimComponentModule {
}
