import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'hi']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    const userLang = localStorage.getItem('userLang');

    if (userLang) {
      translate.use(userLang);
    } else {
      translate.use(browserLang.match(/en|hi/) ? browserLang : 'en');
    }

  }

}
