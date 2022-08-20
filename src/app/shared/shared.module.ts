import { UserInfoComponent } from './components/user-info/user-info.component';
import { SettingsMenuComponent } from './components/settings-menu/settings-menu.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayTitleComponent } from './components/overlay-title/overlay-title.component';
import { SideFilterComponent } from './components/side-filter/side-filter.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TableInfoComponent } from './components/table-info/table-info.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ContainerComponent } from './components/container/container.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { InfoTitleComponent } from './components/info-title/info-title.component';
import { WarningMessageComponent } from './components/warning-message/warning-message.component';
import { ConfirmComponent } from './components/confirm/confirm.component';



@NgModule({
  declarations: [
    OverlayTitleComponent,
    SideFilterComponent,
    NavbarComponent,
    SettingsMenuComponent,
    UserInfoComponent,
    TableInfoComponent,
    NotFoundComponent,
    ContainerComponent,
    MainLayoutComponent,
    InfoTitleComponent,
    WarningMessageComponent,
    ConfirmComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [OverlayTitleComponent, SideFilterComponent,NavbarComponent,SettingsMenuComponent,UserInfoComponent,TableInfoComponent,
    NotFoundComponent,ContainerComponent,MainLayoutComponent,InfoTitleComponent,WarningMessageComponent,ConfirmComponent]
})
export class SharedModule { }
