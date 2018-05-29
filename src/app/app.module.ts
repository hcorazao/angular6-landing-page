// Angular
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Modules
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

// Components
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CoverComponent } from './landing-page/cover/cover.component';
import { MoneyExchangeComponent } from './landing-page/money-exchange/money-exchange.component';
import { FooterComponent } from './landing-page/footer/footer.component';
import { LoadingComponent } from './shared/loading/loading.component';
import { DividerComponent } from './landing-page/divider/divider.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    CoverComponent,
    MoneyExchangeComponent,
    FooterComponent,
    LoadingComponent,
    DividerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
