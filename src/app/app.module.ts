import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PeopleCardsComponent } from './shared/components/people-cards/people-cards.component';
import { HomepageComponent } from './modules/components/homepage/homepage.component';

@NgModule({
    declarations: [
        PeopleCardsComponent,
        HomepageComponent,

    ],
    imports: [
        MatCardModule,
        MatGridListModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }