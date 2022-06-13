import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainFeaturesListComponent } from './main-features-list.component';

describe('MainFeaturesListComponent', () => {
  let component: MainFeaturesListComponent;
  let fixture: ComponentFixture<MainFeaturesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainFeaturesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainFeaturesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
