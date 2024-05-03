import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShowexpansesPage } from './showexpanses.page';

describe('ShowexpansesPage', () => {
  let component: ShowexpansesPage;
  let fixture: ComponentFixture<ShowexpansesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ShowexpansesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
