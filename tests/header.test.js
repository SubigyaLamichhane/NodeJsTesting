const puppeteer = require('puppeteer');

test('Adds two numbers', () => {
  const sum = 1 + 2;

  expect(sum).toEqual(3);
});

describe('Browser Test', () => {
  test('We can launch a browser', async () => {
    const browser = await puppeteer.launch({
      headless: false,
    });
    const page = await browser.newPage();
  }, 3000000);
});
