import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSectionListComponent } from './main-section-list.component';

describe('MainSectionListComponent', () => {
  let component: MainSectionListComponent;
  let fixture: ComponentFixture<MainSectionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainSectionListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainSectionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
