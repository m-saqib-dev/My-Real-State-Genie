import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './_shared/layout/layout.component';
import { HeaderComponent } from './_shared/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NavigationComponent } from './_shared/navigation/navigation.component';
import { CreateNewComponent } from './_shared/create-new/create-new.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { DisplayListComponent } from './_shared/display-list/display-list.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CustomTextFieldComponent } from './_shared/custom-text-fields/custom-text-field/custom-text-field.component';
import { CustomIconTextFieldComponent } from './_shared/custom-text-fields/custom-icon-text-field/custom-icon-text-field.component';
import { CustomButtonTextFieldComponent } from './_shared/custom-text-fields/custom-button-text-field/custom-button-text-field.component';
import { CustomIconButtonTextFieldComponent } from './_shared/custom-text-fields/custom-icon-button-text-field/custom-icon-button-text-field.component';
import { LoginComponent } from './pages/login/login.component';
import { CustomButtonComponent } from './_shared/custom-button/custom-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LayoutComponent,
    HeaderComponent,
    NavigationComponent,
    CreateNewComponent,
    DisplayListComponent,
    CustomTextFieldComponent,
    CustomIconTextFieldComponent,
    CustomButtonTextFieldComponent,
    CustomIconButtonTextFieldComponent,
    LoginComponent,
    CustomButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,

    MatPaginatorModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
