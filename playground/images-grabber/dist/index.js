"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const request_1 = __importDefault(require("request"));
const cheerio_1 = __importDefault(require("cheerio"));
const fs_1 = __importDefault(require("fs"));
const urls = [
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
function download(url, filename, callback) {
    request_1.default.head(url, function (error, res, html) {
        console.log('content-type:', res.headers['content-type']);
        console.log('content-length:', res.headers['content-length']);
        request_1.default(url)
            .pipe(fs_1.default.createWriteStream(filename))
            .on('close', callback);
    });
}
;
/**
 * Get image paths from given url
 * @param url string
 * @return Promise<string>
 */
function getImage(url) {
    return new Promise((resolve, reject) => {
        request_1.default(url, (error, res, html) => {
            if (error) {
                console.error(`${url} - error!`);
                console.error(error);
                reject(error);
            }
            const $ = cheerio_1.default.load(html);
            const heroImage = $('.teaser--hero__bg-container');
            const imageUrl = 'https://www.tui.com' + cheerio_1.default(heroImage).attr('data-src');
            console.log(`${url} - done!`);
            resolve(imageUrl);
        });
    });
}
/**
 * Run script
 */
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const imagePaths = yield Promise.all(urls.map((url) => __awaiter(this, void 0, void 0, function* () {
            const imagePath = yield getImage(url);
            return { region: url.split("/").pop(), image: imagePath };
        })));
        console.log('-----', imagePaths);
    });
}
main();
//# sourceMappingURL=index.js.map