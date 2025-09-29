// using Promises, simulating a request to a server for blog post titles

let posts = [
  { title: "title one", body: "body one" },
  { title: "title two", body: "body two" },
];

function getPostTitles(): Promise<string[]> {
  return new Promise((resolve, reject) => {
    const failSimulated = Math.random() < 0.25;

    setTimeout(() => {
      if (failSimulated) {
        reject(new Error("Your connection has failed"));
      } else {
        let titles: string[] = [];
        posts.forEach((post) => {
          titles.push(post.title);
          resolve(titles);
        }, 1000);
      }
    });
  });
}

getPostTitles()
  .then((titles) => {
    console.log("titles:", titles);
  })
  .catch((error) => {
    console.log("this is an error", error);
  });
