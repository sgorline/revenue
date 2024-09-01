import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OutputComponent } from './output.component';
import { provideRouter } from '@angular/router';

describe('OutputComponent', () => {

  let component: OutputComponent;
  let fixture: ComponentFixture<OutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutputComponent],
      providers: [provideRouter([])]
    }).compileComponents();
    fixture = TestBed.createComponent(OutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set revenue based on state.revenue', () => {
    window.history.pushState({ revenue: '10k' }, '', '');
    component.ngOnInit();
    expect(component.revenue).toBe('10k');
  });

});
