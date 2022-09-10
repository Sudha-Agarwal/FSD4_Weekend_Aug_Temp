import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelRegisterationFormComponent } from './model-registeration-form.component';

describe('ModelRegisterationFormComponent', () => {
  let component: ModelRegisterationFormComponent;
  let fixture: ComponentFixture<ModelRegisterationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelRegisterationFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelRegisterationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
