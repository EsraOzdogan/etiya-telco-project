import { UserInfoComponent } from './components/user-info/user-info.component';
import { SettingsMenuComponent } from './components/settings-menu/settings-menu.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayTitleComponent } from './components/overlay-title/overlay-title.component';
import { SideFilterComponent } from './components/side-filter/side-filter.component';
import { NavbarComponent } from './components/navbar/navbar.component';



@NgModule({
  declarations: [
    OverlayTitleComponent,
    SideFilterComponent,
    NavbarComponent,
    SettingsMenuComponent,
    UserInfoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [OverlayTitleComponent, SideFilterComponent,NavbarComponent,SettingsMenuComponent,UserInfoComponent]
})
export class SharedModule { }
