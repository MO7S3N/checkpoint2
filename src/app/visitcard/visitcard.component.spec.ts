import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { VisitcardComponent } from './visitcard.component';

describe('VisitcardComponent', () => {
  let component: VisitcardComponent;
  let fixture: ComponentFixture<VisitcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
