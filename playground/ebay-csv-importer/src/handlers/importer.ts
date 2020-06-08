import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';
import * as puppeteer from 'puppeteer';
import { getChrome } from '../chrome-script';

export const publishProductsFromCSV: APIGatewayProxyHandler = async (event, _context) => {
  // const { url } = event.queryStringParameters;
  const url = 'https://google.com';
  const chrome = await getChrome();

  const browser = await puppeteer.connect({
    browserWSEndpoint: chrome.endpoint,
  });

  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle0' });
  // const content = await page.evaluate(() => document.body.innerHTML);
  await page.screenshot({ path: 'screenshot.png', fullPage: true });
  await browser.close();

  return {
    status: 200,
    message: 'done'
  };
};
