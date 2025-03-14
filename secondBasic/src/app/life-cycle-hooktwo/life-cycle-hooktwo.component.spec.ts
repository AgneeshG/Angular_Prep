import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeCycleHooktwoComponent } from './life-cycle-hooktwo.component';

describe('LifeCycleHooktwoComponent', () => {
  let component: LifeCycleHooktwoComponent;
  let fixture: ComponentFixture<LifeCycleHooktwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifeCycleHooktwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifeCycleHooktwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
