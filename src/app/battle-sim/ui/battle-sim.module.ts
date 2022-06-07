import { CommanderDetailsModule } from './../../commander-list/feature/commander-details/commander-details.module';
import { WidgetsModule } from './../../shared/widgets/widgets.module';
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
import {BattleSimComponent} from "./battle-sim.component";
import { BattleSimComponentRoutingModule } from './battle-sim-routing.module';

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
