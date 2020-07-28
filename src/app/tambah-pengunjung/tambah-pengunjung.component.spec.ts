import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TambahPengunjungComponent } from './tambah-pengunjung.component';

describe('TambahPengunjungComponent', () => {
  let component: TambahPengunjungComponent;
  let fixture: ComponentFixture<TambahPengunjungComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TambahPengunjungComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TambahPengunjungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
