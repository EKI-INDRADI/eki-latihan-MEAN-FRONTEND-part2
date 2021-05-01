import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasienAddComponent } from './pasien-add.component';

describe('PasienAddComponent', () => {
  let component: PasienAddComponent;
  let fixture: ComponentFixture<PasienAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasienAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasienAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
