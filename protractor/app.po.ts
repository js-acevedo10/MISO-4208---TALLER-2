import {browser, by, element, ElementFinder} from 'protractor';

export class TourOfHeroesPage {
    navigateTo() {
        return browser.get('/');
    }

    getTop4Heroes() {
        return element.all(by.css('.module.hero')).all(by.tagName('h4')).getText();
    }

    navigateToHeroes() {
        element(by.linkText('Heroes')).click();
    }

    getAllHeroes() {
        return element(by.tagName('my-heroes')).all(by.tagName('li'));
    }

    enterNewHeroInInput(newHero: string) {
        element(by.tagName('input')).sendKeys(newHero);
        element(by.buttonText('Add')).click();
    }

    searchHero(heroName: string) {
        browser.wait(element(by.tagName('input')).sendKeys(heroName), 5000);
        element(by.css('.search-result')).click();
        return element(by.tagName('h2')).getText();
    }

    deleteHero() {
      element.all(by.buttonText('x')).first().click();
    }

    editHero(heroName: string, newName: string) {
        element(by.tagName('input')).sendKeys(heroName);
        element(by.css('.search-result')).click();
        element(by.tagName('hero-detail')).all(by.tagName('input')).sendKeys(newName);
        element(by.buttonText('Save')).click();
        return true;
    }

    goToHeroFromHeroes() {
      element(by.css('.heroes')).all(by.tagName('li')).first().element(by.css('.badge')).click();
      element(by.buttonText('View Details')).click();
      return element(by.buttonText('Save')).isDisplayed();
    }

    goToHeroFromDashboard() {
      element.all(by.css('.hero')).first().click();
      return element(by.buttonText('Save')).isDisplayed();
    }
}
