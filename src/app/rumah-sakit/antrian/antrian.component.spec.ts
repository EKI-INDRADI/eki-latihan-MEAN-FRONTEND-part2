import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AntrianComponent } from './antrian.component';

describe('AntrianComponent', () => {
  let component: AntrianComponent;
  let fixture: ComponentFixture<AntrianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntrianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntrianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
