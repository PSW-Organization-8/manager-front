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
import { RoomScheduleComponent } from './roomSchedule/roomSchedule.component';
import { RoomSchedule1Component } from './roomSchedule1/roomSchedule1.component';
import { RoomSchedule2Component } from './roomSchedule2/roomSchedule2.component';
import { RoomSchedule3Component } from './roomSchedule3/roomSchedule3.component';
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

import { ReactiveFormsModule } from '@angular/forms';

import { CreateMedicationConsumptionReportComponent } from './create-medication-consumption-report/create-medication-consumption-report.component';
import { CreateMedicationSpecificationReportComponent } from './create-medication-specification-report/create-medication-specification-report.component';
import { AllPharmaciesViewComponent } from './all-pharmacies-view/all-pharmacies-view.component';
import { PharmacyProfileComponent } from './pharmacy-profile/pharmacy-profile.component';

import { DoctorsComponent } from './doctors/doctors.component';
import { DoctorShiftComponent } from './doctors/doctor-shift/doctor-shift.component';
import { DoctorVacationComponent } from './doctors/doctor-vacation/doctor-vacation.component';
import { ShiftsComponent } from './doctors/shifts/shifts.component';
import { DoctorsWorkloadComponent } from './doctors/doctors-worklaod/doctors-workload.component';
import { ChartModule } from 'angular2-chartjs';

import { BanPatientComponent } from './ban-patient/ban-patient.component';
import { NotificationComponent } from './notification/notification.component';
import { TendersViewComponent } from './tenders/tenders-view/tenders-view.component';
import { CreateTenderComponent } from './tenders/create-tender/create-tender.component';
import { ChooseTenderOrdersComponent } from './tenders/choose-tender-orders/choose-tender-orders.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'notification', component: NotificationComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'feedbackview', component: AllFeedbackViewComponent },
  { path: 'pharmacyRegistration', component: PharmacyRegistrationComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'allObjections', component: AllObjectionsViewComponent},
  { path: 'createObjection', component: CreateObjectionComponent},
  { path: 'actionsAndNews', component: ActionsAndNewsComponent},
  { path: 'equipment', component: EquipmentComponent },
  { path: 'moveEquipment', component: MoveEquipmentComponent },
  { path: 'roomSchedule', component: RoomScheduleComponent},
  { path: 'roomSchedule1', component: RoomSchedule1Component},
  { path: 'roomSchedule2', component: RoomSchedule2Component},
  { path: 'roomSchedule3', component: RoomSchedule3Component},
  { path: 'doctors', component: DoctorsComponent},
  { path: 'doctor-shift', component: DoctorShiftComponent},
  { path: 'doctor-vacation', component: DoctorVacationComponent},
  { path: 'shifts', component: ShiftsComponent},
  { path: 'doctors-workload', component: DoctorsWorkloadComponent},

  { path: 'surveyData', component: SurveyDataComponent},
  { path: 'banPatient', component: BanPatientComponent},
  { path: 'urgentProcurementOfMedication', component: UrgentProcurementOfMedicationComponent},
  { path: 'createMedicineConsumptionReport', component: CreateMedicationConsumptionReportComponent},
  { path: 'createMedicationSpecificationReportComponent', component: CreateMedicationSpecificationReportComponent},
  { path: 'registratedPharmacies', component: AllPharmaciesViewComponent},

  { path: 'pharmacyProfile', component: PharmacyProfileComponent},
  { path: 'tenders', component: TendersViewComponent},
  { path: 'createTender', component: CreateTenderComponent},
  { path: 'chooseOrder/:id', component: ChooseTenderOrdersComponent},

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
    RoomScheduleComponent,
    RoomSchedule1Component,
    RoomSchedule2Component,
    RoomSchedule3Component,
    DoctorsComponent,
    DoctorShiftComponent,
    DoctorVacationComponent,
    ShiftsComponent,
    DoctorsWorkloadComponent,

    SurveyDataComponent,
    UrgentProcurementOfMedicationComponent,
    CreateMedicationConsumptionReportComponent,
    CreateMedicationSpecificationReportComponent,
    AllPharmaciesViewComponent,
    PharmacyProfileComponent,

    BanPatientComponent,
    NotificationComponent,
    TendersViewComponent,
    CreateTenderComponent,
    ChooseTenderOrdersComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(routes),
    FusionChartsModule,
    ChartModule,
    ReactiveFormsModule

  ],
  exports: [RouterModule],
  providers: [AllFeedbackViewService],
  bootstrap: [AppComponent]
})
export class AppModule { }
