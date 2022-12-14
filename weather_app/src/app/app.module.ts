import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodayComponent } from './today/today.component';
import { WeeklyComponent } from './weekly/weekly.component';
import { MonthlyComponent } from './monthly/monthly.component';
import { HistoricalComponent } from './historical/historical.component';
import { HttpClientModule } from '@angular/common/http';
import { GetByKeyPipe } from './get-by-key.pipe';
import { DatePipe } from '@angular/common';
import { CityInfoPanelComponent } from './city-info-panel/city-info-panel.component';
import { WeeklyListItemComponent } from './weekly-list-item/weekly-list-item.component';
import { HourlyPanelComponent } from './hourly-panel/hourly-panel.component';
import { LoginComponent } from './login/login.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { AuthService } from './auth.service';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    TodayComponent,
    WeeklyComponent,
    MonthlyComponent,
    HistoricalComponent,
    GetByKeyPipe,
    CityInfoPanelComponent,
    WeeklyListItemComponent,
    HourlyPanelComponent,
    LoginComponent,
    LoginFormComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule
  ],
  providers: [DatePipe, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
