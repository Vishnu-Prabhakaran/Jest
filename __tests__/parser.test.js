const parser = require('../parser');
const fs = require('fs');
let html;

// beforeAll runs before Test
beforeAll(() => {
  html = fs.readFileSync('../test.html');
  listings = parser.listings(html);
});

it('should give the correct listing objects', () => {
  expect(listings.length).toBe(120);
});

it('should give the correct hood from listings', () => {
  expect(listings[0].hood).toBe('(Burbank)');
});

it('should give the correct date from listings', () => {
  expect(listings[0].datePosted).toBe(new Date('2020-02-22 01:26'));
});

it('Should get correct url', () => {
  expect(listings[0].title).toBe('BOH Staff needed');
});

it('Should get correct title', () => {
  const listings = parser.listings(html);
  expect(listings[0].url).toBe(
    'https://losangeles.craigslist.org/sfv/fbh/d/burbank-boh-staff-needed/7080130721.html'
  );
});
