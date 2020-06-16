import * as http from 'http';
import * as https from 'https';

export async function getStream(file: string) {
  let streamHttp : http.IncomingMessage;

  try {
    streamHttp = await new Promise((resolve) => {
      https.get(file, (res: http.IncomingMessage) => {
        resolve(res);
      })
    });
  } catch (err) {
    throw err;
  }

  return streamHttp;
}

export default {
  getStream,
}
