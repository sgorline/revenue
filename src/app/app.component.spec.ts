import { AppComponent } from './app.component';
import { provideRouter } from '@angular/router';
import { TestBed } from '@angular/core/testing';

describe('AppComponent', () => {

  let app: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [provideRouter([])]
    }).compileComponents();
    const fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('should call createRouteListener on init', () => {
    spyOn(app, 'createRouteListener');
    app.ngOnInit();
    expect(app.createRouteListener).toHaveBeenCalled();
  });

});
