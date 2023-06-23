import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDashboardPasswordGeneratorComponent } from './main-dashboard-password-generator.component';

describe('MainDashboardPasswordGeneratorComponent', () => {
  let component: MainDashboardPasswordGeneratorComponent;
  let fixture: ComponentFixture<MainDashboardPasswordGeneratorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainDashboardPasswordGeneratorComponent]
    });
    fixture = TestBed.createComponent(MainDashboardPasswordGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
