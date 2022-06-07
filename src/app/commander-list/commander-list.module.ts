import { WidgetsModule } from '../shared/widgets/widgets.module';
import { CommanderDetailsModule } from './commander-details/commander-details.module';
import { CommanderListComponent } from './commander-list.component';
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
import {CommanderListRoutingModule} from "./commander-list-routing.module";

@NgModule({
  imports: [
    CommanderListRoutingModule,
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
  declarations: [CommanderListComponent]
})
export class CommanderListModule {
}
