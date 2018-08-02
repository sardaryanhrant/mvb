import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {NewComponent} from './pages/new/new.component';
import {MatTabsModule} from '@angular/material/tabs';
import {RouterModule, Routes} from '@angular/router';
import {McBreadcrumbsModule} from 'ngx-breadcrumbs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {MatNativeDateModule, MatSliderModule} from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatTableModule} from '@angular/material/table';
import { FlexLayoutModule } from "@angular/flex-layout";
import {
  MatIconModule,
  MatButtonModule,
  MatSelectModule,
  MatFormFieldModule,
  MatInputModule,
  MatOptionModule,
  MatGridListModule
} from '@angular/material';
import {PatientComponent} from './components/new/patient/patient.component';

const routes: Routes = [
  {
    path: '', component: NewComponent,
    data: {
      breadcrumbs: 'Neu anlegen'
    },
    children: [
      {
        path: 'patienta', component: PatientComponent,
        data: {
          breadcrumbs: true
        }
      },
      {
        path: 'patientb', component: PatientComponent,
        data: {
          breadcrumbs: true
        }
      },
      {
        path: 'neuroa', component: PatientComponent,
        data: {
          breadcrumbs: true
        }
      },
      {
        path: 'new', component: PatientComponent,
        data: {
          breadcrumbs: true
        }
      },
    ]
  },

];

@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    PatientComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    FlexLayoutModule,
    BrowserModule,
    MatTabsModule,
    MatDatepickerModule,
    MatSliderModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    McBreadcrumbsModule.forRoot(),
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    ReactiveFormsModule,
    FormsModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
