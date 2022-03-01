import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplteRefreanceComponent } from './templte-refreance.component';

describe('TemplteRefreanceComponent', () => {
  let component: TemplteRefreanceComponent;
  let fixture: ComponentFixture<TemplteRefreanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplteRefreanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplteRefreanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
