import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AplikasiComponent } from './aplikasi.component';

describe('AplikasiComponent', () => {
  let component: AplikasiComponent;
  let fixture: ComponentFixture<AplikasiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AplikasiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AplikasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
