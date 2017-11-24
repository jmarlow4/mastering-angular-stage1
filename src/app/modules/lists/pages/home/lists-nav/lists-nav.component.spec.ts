import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsNavComponent } from './lists-nav.component';

describe('ListsNavComponent', () => {
  let component: ListsNavComponent;
  let fixture: ComponentFixture<ListsNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListsNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListsNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
