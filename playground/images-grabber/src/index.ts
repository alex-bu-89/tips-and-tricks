import request, { UriOptions } from 'request';
import cheerio from 'cheerio';
import fs from 'fs';

const urls: string[] = [
    'https://www.tui.com/hotels/italien/sardinien',
    'https://www.tui.com/pauschalreisen/portugal/madeira',
    'https://www.tui.com/pauschalreisen/kap-verde',
    'https://www.tui.com/pauschalreisen/kroatien',
    'https://www.tui.com/hotels/spanien/lanzarote',
    'https://www.tui.com/hotels/griechenland/rhodos',
    'https://www.tui.com/hotels/malediven',
    'https://www.tui.com/pauschalreisen/mexiko',
    'https://www.tui.com/hotels/spanien/menorca',
    'https://www.tui.com/pauschalreisen/bulgarien',
    'https://www.tui.com/last-minute/korfu',
    'https://www.tui.com/pauschalreisen/griechenland/kos',
    'https://www.tui.com/pauschalreisen/portugal/algarve',
    'https://www.tui.com/pauschalreisen/all-inclusive/ibiza',
    'https://www.tui.com/pauschalreisen/spanien/costa-de-la-luz',
    'https://www.tui.com/last-minute/dominikanische-republik',
    'https://www.tui.com/pauschalreisen/vereinigte-arabische-emirate/dubai',
    'https://www.tui.com/pauschalreisen/spanien/costa-del-sol',
    'https://www.tui.com/pauschalreisen/zypern',
    'https://www.tui.com/rundreisen/marokko',
    'https://www.tui.com/pauschalreisen/tunesien',
    'https://www.tui.com/pauschalreisen/all-inclusive/italien',
    'https://www.tui.com/pauschalreisen/griechenland/santorin',
    'https://www.tui.com/pauschalreisen/seychellen',
    'https://www.tui.com/pauschalreisen/mauritius',
    'https://www.tui.com/pauschalreisen/tuerkei/antalya',
    'https://www.tui.com/pauschalreisen/tuerkei/belek',
    'https://www.tui.com/hotels/tuerkei/side',
    'https://www.tui.com/hotels/tuerkei/alanya',
];

function download(url: any, filename: any, callback: any) {
  request.head(url, function(error: any, res: request.Response, html: any) {
    console.log('content-type:', res.headers['content-type']);
    console.log('content-length:', res.headers['content-length']);

    request(url)
      .pipe(fs.createWriteStream(filename))
      .on('close', callback);
  });
};

/**
 * Get image paths from given url
 * @param url string
 * @return Promise<string>
 */
function getImage(url: string): Promise<string> {
  return new Promise((resolve, reject) => {    
    request(url, (error: any, res: request.Response, html: any) => {
      if (error) {
        console.error(`${url} - error!`);
        console.error(error);
        reject(error);
      }
  
      const $ = cheerio.load(html);
  
      const heroImage = $('.teaser--hero__bg-container');
      const imageUrl =
        'https://www.tui.com' + cheerio(heroImage).attr('data-src');
      
      console.log(`${url} - done!`);
      resolve(imageUrl);
    });
  });
}

/**
 * Run script
 */
async function main() {  
  const imagePaths = await Promise.all(urls.map(async (url) => {
    const imagePath = await getImage(url);
    return { region: url.split("/").pop(), image: imagePath };
  }));

  console.log('-----', imagePaths);
}

main();