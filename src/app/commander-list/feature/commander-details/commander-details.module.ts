import { CardModule, AvatarModule } from '@coreui/angular';
import { CommanderDetailsComponent } from './commander-details.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [CommanderDetailsComponent],
  imports: [
    CommonModule,
    CardModule,
    AvatarModule,
    FormsModule
  ],
  exports:[CommanderDetailsComponent]
})
export class CommanderDetailsModule {

}
