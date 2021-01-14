import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionPaysComponent } from './region-pays.component';

describe('RegionPaysComponent', () => {
  let component: RegionPaysComponent;
  let fixture: ComponentFixture<RegionPaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegionPaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionPaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
