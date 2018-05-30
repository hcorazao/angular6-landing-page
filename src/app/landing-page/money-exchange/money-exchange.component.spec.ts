// Angular
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatFormFieldModule, MatInputModule, MatButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';

// Modules
import { TextMaskModule } from 'angular2-text-mask';

// Components
import { MoneyExchangeComponent } from './money-exchange.component';
import { CoverComponent } from '../cover/cover.component';
import { DividerComponent } from '../divider/divider.component';
import { FooterComponent } from '../footer/footer.component';
import { LoadingIconComponent } from '../loading-icon/loading-icon.component';

// Services
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LandingPageService } from '../landing-page.service';

fdescribe('MoneyExchangeComponent', () => {
  let component: MoneyExchangeComponent;
  let fixture: ComponentFixture<MoneyExchangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        ReactiveFormsModule,
        FormsModule,
        TextMaskModule,
        HttpClientModule,
        HttpClientTestingModule
      ],
      declarations: [
        MoneyExchangeComponent,
        CoverComponent,
        DividerComponent,
        FooterComponent,
        LoadingIconComponent
      ],
      providers: [
        LandingPageService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneyExchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
