import { TourOfHeroesPage } from './app.po';

describe('Tour of heroes Dashboard', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage();
  });

  it('should display top 4 heroes', () => {
    page.navigateTo();
    expect(page.getTop4Heroes()).toEqual(['Mr. Nice', 'Narco', 'Bombasto', 'Celeritas']);
  });

  it('should navigate to heroes', () => {
    page.navigateToHeroes();
    expect(page.getAllHeroes().count()).toBe(11);
  });

  it('should search for a hero', () => {
    page.navigateTo();
    expect(page.searchHero('Tornado')).toEqual('Tornado details!');
   });

  it('should edit a heroe', () => {
    page.navigateTo();
    expect(page.editHero('Tornado', 'El Tornado')).toBe(true);
  });

  it('should navigate to a hero from dashboard', () => {
    page.navigateTo();
    expect(page.goToHeroFromDashboard()).toBe(true);
  });
});

describe('Tour of heroes, heroes page', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage;
    page.navigateToHeroes();
  });

  it('should add a new hero', () => {
    const currentHeroes = page.getAllHeroes().count();
    page.enterNewHeroInInput('My new Hero');
    expect(page.getAllHeroes().count()).toBe(currentHeroes.then(n => n + 1));
  });

  it('should delete a hero', () => {
    const currentHeroes = page.getAllHeroes().count();
    page.deleteHero();
    expect(page.getAllHeroes().count()).toBe(currentHeroes.then(n => n - 1));
  });

  it('should visit a hero from heroes view', () => {
    expect(page.goToHeroFromHeroes()).toBe(true);
  });
});
