const parser = require('../parser');
const fs = require('fs');
let html;

// beforeAll runs before Test
beforeAll(() => {
  html = fs.readFileSync('./test.html');
  listings = parser.listings(html);
});

it('should give the correct listing objects', () => {
  expect(listings.length).toBe(120);
});

it('should give the correct hood from listings', () => {
  expect(listings[0].hood).toBe('');
});
// Date will not be equal so use toStrictEqual instead of toBe
it('should give the correct date from listings', () => {
  expect(listings[0].datePosted).toStrictEqual(new Date('2020-02-22 04:16'));
});

it('Should get correct title', () => {
  expect(listings[0].title).toBe('Class A CDL Truck Drivers- Dedicated Routes');
});

it('Should get correct Url', () => {
  expect(listings[0].url).toBe(
    'https://losangeles.craigslist.org/lgb/trp/d/los-angeles-class-cdl-truck-drivers/7080150705.html'
  );
});
