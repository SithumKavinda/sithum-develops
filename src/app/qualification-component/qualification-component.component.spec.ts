import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualificationComponentComponent } from './qualification-component.component';

describe('QualificationComponentComponent', () => {
  let component: QualificationComponentComponent;
  let fixture: ComponentFixture<QualificationComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QualificationComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QualificationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
