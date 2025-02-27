import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { MenuTitleComponent } from './menu-title/menu-title.component';
import { SmallCardComponent } from './small-card/small-card.component';
import { BigCardComponent } from './big-card/big-card.component';



@NgModule({
  declarations: [
    MenuBarComponent,
    MenuTitleComponent,
    SmallCardComponent,
    BigCardComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    MenuTitleComponent,
    MenuBarComponent,
    SmallCardComponent,
    BigCardComponent
  ]
})
export class ComponentModule { }
