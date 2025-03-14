import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeCycleHookOneComponent } from './life-cycle-hook-one.component';

describe('LifeCycleHookOneComponent', () => {
  let component: LifeCycleHookOneComponent;
  let fixture: ComponentFixture<LifeCycleHookOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifeCycleHookOneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifeCycleHookOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
