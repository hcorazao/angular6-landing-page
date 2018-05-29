// Angular
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

// Modules
import { AppRoutingModule } from './app-routing.module';
import { MatFormFieldModule, MatInputModule, MatButtonModule } from '@angular/material';
import { TextMaskModule } from 'angular2-text-mask';

// Components
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CoverComponent } from './landing-page/cover/cover.component';
import { MoneyExchangeComponent } from './landing-page/money-exchange/money-exchange.component';
import { FooterComponent } from './landing-page/footer/footer.component';
import { DividerComponent } from './landing-page/divider/divider.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    CoverComponent,
    MoneyExchangeComponent,
    FooterComponent,
    DividerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    TextMaskModule,
    NoopAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
