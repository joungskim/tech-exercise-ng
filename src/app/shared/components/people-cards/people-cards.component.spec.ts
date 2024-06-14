import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleCardsComponent } from './people-cards.component';

describe('PeopleCardsComponent', () => {
  let component: PeopleCardsComponent;
  let fixture: ComponentFixture<PeopleCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeopleCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeopleCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
