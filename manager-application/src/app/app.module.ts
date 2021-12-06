import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './editor/dashboard.component';
import { AllFeedbackViewComponent } from './feedbacks/all-feedback-view/all-feedback-view.component';
import { AllFeedbackViewService } from './feedbacks/all-feedback-view/all-feedback-view.service';
import { PharmacyRegistrationComponent } from './pharmacy-registration/pharmacy-registration.component';
import { AllObjectionsViewComponent } from './all-objections-view/all-objections-view.component';
import { CreateObjectionComponent } from './create-objection/create-objection.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { MoveEquipmentComponent } from './move-equipment/moveEquipment.component';



import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ActionsAndNewsComponent } from './actions-and-news/actions-and-news.component';
import { UrgentProcurementOfMedicationComponent } from './urgent-procurement-of-medication/urgent-procurement-of-medication.component';

import { FusionChartsModule } from 'angular-fusioncharts';
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import { SurveyDataComponent } from './survey-data/survey-data.component';

import { CreateMedicationConsumptionReportComponent } from './create-medication-consumption-report/create-medication-consumption-report.component';
import { CreateMedicationSpecificationReportComponent } from './create-medication-specification-report/create-medication-specification-report.component';
import { AllPharmaciesViewComponent } from './all-pharmacies-view/all-pharmacies-view.component';
import { PharmacyProfileComponent } from './pharmacy-profile/pharmacy-profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'feedbackview', component: AllFeedbackViewComponent },
  { path: 'pharmacyRegistration', component: PharmacyRegistrationComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'allObjections', component: AllObjectionsViewComponent},
  { path: 'createObjection', component: CreateObjectionComponent},
  { path: 'actionsAndNews', component: ActionsAndNewsComponent},
  { path: 'equipment', component: EquipmentComponent },
  { path: 'moveEquipment', component: MoveEquipmentComponent },

  { path: 'surveyData', component: SurveyDataComponent},
  { path: 'urgentProcurementOfMedication', component: UrgentProcurementOfMedicationComponent},
  { path: 'createMedicineConsumptionReport', component: CreateMedicationConsumptionReportComponent},
  { path: 'createMedicationSpecificationReportComponent', component: CreateMedicationSpecificationReportComponent},
  { path: 'registratedPharmacies', component: AllPharmaciesViewComponent},
  { path: 'pharmacyProfile', component: PharmacyProfileComponent}

];

FusionChartsModule.fcRoot(FusionCharts, Charts, FusionTheme);

@NgModule({
  declarations: [
    DashboardComponent,
    AppComponent,
    AllFeedbackViewComponent,
    PharmacyRegistrationComponent,
    HeaderComponent,
    HomeComponent,
    AllObjectionsViewComponent,
    CreateObjectionComponent,
    ActionsAndNewsComponent,
    EquipmentComponent,
    MoveEquipmentComponent,

    SurveyDataComponent,
    UrgentProcurementOfMedicationComponent,
    CreateMedicationConsumptionReportComponent,
    CreateMedicationSpecificationReportComponent,
    AllPharmaciesViewComponent,
    PharmacyProfileComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(routes),
    FusionChartsModule
  ],
  exports: [RouterModule],
  providers: [AllFeedbackViewService],
  bootstrap: [AppComponent]
})
export class AppModule { }
