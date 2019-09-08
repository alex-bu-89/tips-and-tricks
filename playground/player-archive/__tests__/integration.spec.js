const path = require('path');

describe('app', () => {
  beforeEach(async () => {
    await page.goto('http://localhost:8080');
  });

  it('should display searchForm', async () => {
    const searchForm = await page.$('form.player-search-form');
    const input = await page.$('form.player-search-form input');
    const button = await page.$('form.player-search-form button');
    
    await expect(searchForm).toBeTruthy();
    await expect(input).toBeTruthy();
    await expect(button).toBeTruthy();
  });

  it('should display header', async () => {
    const header = await page.$('header.player-archieve__header');
    
    await expect(header).toBeTruthy();
  });

  it('should display footer', async () => {
    const footer = await page.$('footer');
    
    await expect(footer).toBeTruthy();
  });

  it('should display player datails when fabio typed', async () => {    
    await page.type('.player-search-form input', 'fabio');

    await page.click('.player-search-form button');
    await page.waitForSelector('.player-profile');
    
    const element = await page.$('.player-profile');
    const img = await page.$('.player-profile img');
    const ul = await page.$('.player-profile ul');
    
    await expect(element).toBeTruthy();
    await expect(img).toBeTruthy();
    await expect(ul).toBeTruthy();
  });

  it('should not display player datails when giorgio typed', async () => {    
    await page.type('.player-search-form input', 'giorgio');

    await page.click('.player-search-form button');
    await page.waitForSelector('.player-archieve__not-available');
    
    const el = await page.$('.player-archieve__not-available');
    const text = await (await el.getProperty('textContent')).jsonValue();
    
    await expect(text).toBe('Player is not available');
  });

  it('should not display player datails when francesco typed', async () => {    
    await page.type('.player-search-form input', 'francesco');

    await page.click('.player-search-form button');
    await page.waitForSelector('.player-archieve__not-available');
    
    const el = await page.$('.player-archieve__not-available');
    const text = await (await el.getProperty('textContent')).jsonValue();
    
    await expect(text).toBe('Player is not available');
  });

  it('should not display player datails when something typed', async () => {    
    await page.type('.player-search-form input', 'foobar');

    await page.click('.player-search-form button');
    await page.waitForSelector('.player-archieve__not-available');
    
    const el = await page.$('.player-archieve__not-available');
    const text = await (await el.getProperty('textContent')).jsonValue();
    
    await expect(text).toBe('Player is not available');
  });
});