import 'whatwg-fetch';
import logger from '../../config/logger';

/**
 * GET request to given url
 * @param {string} url 
 */
export function get(url) {
  return fetch(url)
          .then(response => {
            if (!response.ok) {
              throw Error(response.statusText);
            }

            return response.json();
          })
          .catch(err => {
            logger.error(`Error while fetching ${url} ${err}`);
            throw err;
          });
}

export default {
  get,
};