const db = require("../db_config/config");

class Post {
  constructor(data) {
    this.title = data.title;
    this.author = data.author;
    this.body = data.body;
  }

  static get all() {
    return new Promise(async (res, rej) => {
      try {
        let result = await db.run(SQL`SELECT * FROM posts;`);
        let posts = result.rows.map((r) => new Post(r));
        res(posts);
      } catch (err) {
        rej("Error retrieving posts: ${err");
      }
    });
  }
}

static create(title, author, body) {
  return new Promise(async (resolve, reject) => {
    try {
      let postData = await db.query(
        "INSERT INTO posts (title, author, body) VALUES ($1, $2, $3) RETURNING *;",
        [title, author, body]
      );
      let post = new Post(postData.rows[0]);
      resolve(post);
    } catch (err) {
        reject("Post could not be created");
    }
  });
}

module.exports = Post;
