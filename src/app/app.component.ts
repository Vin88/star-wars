import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  lang_support = [{ key: 'en_us', value: 'English US' }, { key: 'en_uk', value: 'English UK' }, { key: 'fr', value: 'French' }];
  constructor(
    private translate: TranslateService
  ) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en_us');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en_us');
    translate.get('Heading.welcome').subscribe((res: string) => {
      console.log(res);
    });
  }

  changeLanguage(lang) {
    this.translate.use(lang);
  }
}
