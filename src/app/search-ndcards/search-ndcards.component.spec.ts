import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchNDcardsComponent } from './search-ndcards.component';

describe('SearchNDcardsComponent', () => {
  let component: SearchNDcardsComponent;
  let fixture: ComponentFixture<SearchNDcardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchNDcardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchNDcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
