import { Component } from '@angular/core';
import { PeopleCardsComponent } from '../../../shared/components/people-cards/people-cards.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [PeopleCardsComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
