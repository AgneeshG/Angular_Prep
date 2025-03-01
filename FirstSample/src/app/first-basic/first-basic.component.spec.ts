import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstBasicComponent } from './first-basic.component';

describe('FirstBasicComponent', () => {
  let component: FirstBasicComponent;
  let fixture: ComponentFixture<FirstBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstBasicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
