const request = require('request');
const VK = require('./vkApi');

const app = async () => {
  let shouldDelete = true;
  let ready = true;
  let posts = [];

  do {
    if (ready) {
      console.log('Next iteration');

      ready = false;
      posts = await VK.getWallPosts('53631471');

      if (posts.length === 0) {
        shouldDelete = false;
        break;
      }

      const postIds = posts.response.items.map((item) => {
        return item.id;
      });

      try {
        const deleteResult = await VK.removeWallPosts('53631471', postIds);
      } catch (e) {
        shouldDelete = false;
      };

      ready = true;
    }
  } while (shouldDelete)
}

if (!process.env.TOKEN) {
  throw new Error('Token is invalid');
  process.exit(1);
};

app().catch((err) => { console.log(err) });
