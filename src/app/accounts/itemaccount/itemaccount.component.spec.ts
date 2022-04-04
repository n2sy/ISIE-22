import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemaccountComponent } from './itemaccount.component';

describe('ItemaccountComponent', () => {
  let component: ItemaccountComponent;
  let fixture: ComponentFixture<ItemaccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemaccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
