const request = require('request-promise-native');
const qs = require('query-string');

class VkAPI {
  constructor() {
    this.endpoint = 'https://api.vk.com/method';
    this.timeout = 500;
    this.params = {
      'v': '5.78',
      'access_token': process.env.TOKEN,
    }
  }

  // Get last 20 posts
  // https://api.vk.com/method/wall.get?uid=53631471&access_token={{token}}&v=5.78
  getWallPosts(uid) {
    const method = 'wall.get'
    this.params.uid = uid;
    this.params.count = 100;

    const strParams = qs.stringify(this.params);
    const url = `${this.endpoint}/${method}?${strParams}`

    return request.get(url)
      .then((result) => {
        return JSON.parse(result);
      })
      .catch((err) => {
        throw err;
      });
  }

  // Remove given posts
  // https://api.vk.com/method/wall.delete?uid=53631471&access_token={{token}}&v=5.78&post_id=2894
  removeWallPosts(uid, postIds) {
    return new Promise((resolve, reject) => {
      const method = 'wall.delete'
      this.params.uid = uid;

      for (let [index, postId] of postIds.entries()) {
        const intervalObj = setTimeout(() => {
          this.params.post_id = postId;
          const strParams = qs.stringify(this.params);
          const url = `${this.endpoint}/${method}?${strParams}`;

          request.get(url)
            .then((result) => {
              console.log(`removed post with id: ${postId}; ${result}`);
              if (postIds.length - 1 === index) {
                resolve();
              }
            })
            .catch((err) => {
              reject(err);
            });
        }, this.timeout * index);
      }
    })
  }
}

module.exports = new VkAPI();
