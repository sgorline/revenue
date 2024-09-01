import { AppComponent } from './app.component';
import { provideRouter } from '@angular/router';
import { TestBed } from '@angular/core/testing';

describe('AppComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [provideRouter([])]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should call createRouteListener on init', () => {

  });

  it('should unsubscribe from router on destroy', () => {

  });

  it('should subscribe to router and set url on route change', () => {

  });

});
