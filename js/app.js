const container = document.getElementById("container");

//fetch posts from api
async function fetchPosts() {
  const res = await fetch("../json/code-test.json");
  const data = await res.json();
  return data;
}

async function paintPostsIntoDOM() {
  const data = await fetchPosts();
  data.articles.forEach((article) => {
    //creating <div class="article"></div>
    const articleDiv = document.createElement("div");
    articleDiv.className = "article";

    //creating <div class="content"></div>
    const contentDiv = document.createElement("div");
    contentDiv.className = "content";

    //creating <div class="category"></div>
    const categoryDiv = document.createElement("div");
    categoryDiv.className = "category";

    //creating <h3></h3>
    const h3 = document.createElement("h3");

    //creating <p clas="excerpt"></p>
    const excerptP = document.createElement("p");
    excerptP.className = "excerpt";

    const thumbnail = document.createElement("img");
    categoryDiv.textContent = article.primarySectionRouteName;
    contentDiv.appendChild(categoryDiv);

    const a = document.createElement("a");
    a.href = article.link;
    a.target = "_blank";
    a.textContent = article.headline;
    h3.appendChild(a);
    contentDiv.appendChild(h3);

    excerptP.textContent = article.standfirst;
    contentDiv.appendChild(excerptP);

    thumbnail.src = article.thumbnail.src;
    thumbnail.alt = article.thumbnail.title;

    articleDiv.appendChild(contentDiv);
    articleDiv.appendChild(thumbnail);

    container.appendChild(articleDiv);
  });
}

paintPostsIntoDOM();
