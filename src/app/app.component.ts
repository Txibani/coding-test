import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    sections = [
        {
            icon: 'receipt',
            link: 'products',
        },
        {
            icon: 'group',
            link: 'customers',
        },
        {
            icon: 'person',
            link: 'users',
            param: '1'
        }
    ]

    constructor(
        private translateService: TranslateService
    ) {
        this.translateService.setDefaultLang('en');
    }
}
