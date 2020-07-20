import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HairDressingComponent } from './hair-dressing.component';

describe('HairDressingComponent', () => {
  let component: HairDressingComponent;
  let fixture: ComponentFixture<HairDressingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HairDressingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HairDressingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
