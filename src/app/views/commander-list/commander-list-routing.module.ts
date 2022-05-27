import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CommanderListComponent} from "./commander-list.component";


const routes: Routes = [
  {
    path: '',
    component: CommanderListComponent,
    data: {
      title: $localize`Dashboard`
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommanderListRoutingModule {
}
