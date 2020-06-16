import * as Papa from 'papaparse';
// import * as fs from 'fs';

export function papaParsePromise(importFile) {
  return new Promise((resolve, reject) => {
    // const file = fs.createReadStream(importFile);

    Papa.parse(importFile, {
      header: true,
      download: true,
      complete: function (results) {
        resolve(results);
      },
      error: function (error) {
        reject(error);
      },
    });
  });
}

export default {
  papaParsePromise,
}
