import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  constructor(public translate: TranslateService) {
    // line 13 is required to add the prepared locale json for internationalization.
    translate.addLangs(['en', 'hi', 'fr']);
    // line 15 sets default language of the application.
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    const userLang = localStorage.getItem('userLang');
    if (userLang) {
      translate.use(userLang);
    } else {
      translate.use(browserLang.match(/en|hi|fr/) ? browserLang : 'en');
    }
  }
}
