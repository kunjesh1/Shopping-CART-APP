import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingBlockComponent } from './shopping-block.component';

describe('ShoppingBlockComponent', () => {
  let component: ShoppingBlockComponent;
  let fixture: ComponentFixture<ShoppingBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
