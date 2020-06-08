import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';
import * as puppeteer from 'puppeteer';
import { getChrome } from './src/chrome-script';

export const importSvc: APIGatewayProxyHandler = async (event, _context) => {
  // const { url } = event.queryStringParameters;
  const url = 'https://google.com';
  const chrome = await getChrome();
  
  const browser = await puppeteer.connect({
    browserWSEndpoint: chrome.endpoint,
  });

  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle0' });
  // const content = await page.evaluate(() => document.body.innerHTML);
  const rawScreenshot = await page.screenshot({});
  await browser.close();

  return {
    statusCode: 200,
    isBase64Encoded: true,
    body: rawScreenshot.toString('base64'),
    headers: {
      'Content-Type': 'image/png',
    }
  };
}
