import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementOfCaroselComponent } from './element-of-carosel.component';

describe('ElementOfCaroselComponent', () => {
  let component: ElementOfCaroselComponent;
  let fixture: ComponentFixture<ElementOfCaroselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementOfCaroselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementOfCaroselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
