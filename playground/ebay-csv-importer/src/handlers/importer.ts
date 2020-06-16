import utils from '../utils';
import 'source-map-support/register';
import * as puppeteer from 'puppeteer';
import { APIGatewayProxyHandler } from 'aws-lambda';
import { getChrome } from '../chrome-script';
import httpClient from '../services/httpClient';

export const importProductsFromCSV: APIGatewayProxyHandler = async (event, _context) => {
  const csvFile = event['csvFile'];
  const fileStream = await httpClient.getStream(csvFile);
  const data: any = await utils.papaParsePromise(fileStream);

  console.log('------', data.data);

  const url = 'https://www.ebay.de/sl/verkaufen?sr=wnstart';
  const chrome = await getChrome();

  const browser = await puppeteer.connect({
    browserWSEndpoint: chrome.endpoint,
  });

  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle0' });
  // const content = await page.evaluate(() => document.body.innerHTML);
  await page.screenshot({ path: 'screenshot.png', fullPage: false });
  await browser.close();

  return {
    status: 200,
    message: 'done',
  };
};
