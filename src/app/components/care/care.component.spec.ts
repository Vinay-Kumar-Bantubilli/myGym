import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareComponent } from './care.component';

describe('CareComponent', () => {
  let component: CareComponent;
  let fixture: ComponentFixture<CareComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CareComponent]
    });
    fixture = TestBed.createComponent(CareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
