import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { ErrorRoutingModule } from './error-routing/error-routing.module';
import { OrgChartComponent } from './org-chart/org-chart.component';
import { PeopleGridComponent } from './people-grid/people-grid.component';
import { ReportsComponent } from './reports/reports.component';
import { NotesComponent } from './notes/notes.component';
import { PageTemplateComponent } from './page-template/page-template.component';

export const routes: Routes = [
  { path: '', redirectTo: 'org-chart', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'org-chart', component: OrgChartComponent, data: { text: 'Org-Chart' } },
  { path: 'people-grid', component: PeopleGridComponent, data: { text: 'People-Grid' } },
  { path: 'reports', component: ReportsComponent, data: { text: 'Reports' } },
  { path: 'notes', component: NotesComponent, data: { text: 'Notes' } },
  { path: 'page-template', component: PageTemplateComponent, data: { text: 'Page-Template' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ErrorRoutingModule],
  exports: [RouterModule, ErrorRoutingModule]
})
export class AppRoutingModule { }
