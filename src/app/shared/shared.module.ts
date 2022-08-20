import { UserInfoComponent } from './components/user-info/user-info.component';
import { SettingsMenuComponent } from './components/settings-menu/settings-menu.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayTitleComponent } from './components/overlay-title/overlay-title.component';
import { SideFilterComponent } from './components/side-filter/side-filter.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TableInfoComponent } from './components/table-info/table-info.component';
import { NotFoundComponent } from './components/not-found/not-found.component';



@NgModule({
  declarations: [
    OverlayTitleComponent,
    SideFilterComponent,
    NavbarComponent,
    SettingsMenuComponent,
    UserInfoComponent,
    TableInfoComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [OverlayTitleComponent, SideFilterComponent,NavbarComponent,SettingsMenuComponent,UserInfoComponent,TableInfoComponent,
    NotFoundComponent]
})
export class SharedModule { }
