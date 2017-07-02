import {Component} from 'angular2/core'
import {AuthorService} from "./author.service";

@Component({
    selector: 'authors',
    template: `
        {{ title }}
        <ul>
            <li *ngFor="#author of authors">
                {{ author }}
            </li>
        </ul>
    `,
    providers : [AuthorService]
})
export class AuthorsComponent {
    title: string = 'Title for the authors page';
    authors : string[];

    constructor(authorService: AuthorService) {
        this.authors = authorService.getAuthors();
    }
}