import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrgChartComponent } from './org-chart/org-chart.component';
import { IgxSimpleComboModule, IgxInputGroupModule, IgxGridModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxListModule, IgxAvatarModule, IgxBadgeModule, IgxNavigationDrawerModule, IgxNavbarModule, IgxToggleModule } from 'igniteui-angular';
import { PeopleGridComponent } from './people-grid/people-grid.component';
import { ReportsComponent } from './reports/reports.component';
import { RevealViewComponent } from 'reveal-sdk-wrappers-angular';
import { NotesComponent } from './notes/notes.component';
import { PageTemplateComponent } from './page-template/page-template.component';

@NgModule({
  declarations: [
    AppComponent,
    OrgChartComponent,
    PeopleGridComponent,
    ReportsComponent,
    NotesComponent,
    PageTemplateComponent
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxSimpleComboModule,
    IgxInputGroupModule,
    FormsModule,
    IgxGridModule,
    RevealViewComponent,
    IgxButtonModule,
    IgxRippleModule,
    IgxIconModule,
    IgxListModule,
    IgxAvatarModule,
    IgxBadgeModule,
    IgxNavigationDrawerModule,
    IgxNavbarModule,
    IgxToggleModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
