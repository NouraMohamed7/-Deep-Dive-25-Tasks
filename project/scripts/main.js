async function getBlogs() {
    const res = await fetch("https://test-api-v1-vert.vercel.app/v1/blogs");
    return await res.json();
}

async function getArticls() {
    const res = await fetch("https://test-api-v1-vert.vercel.app/v1/articles");
    return await res.json();
}


function createCard(blog) {
    return `
    <div class="card">
      <img src="${blog.image}" alt="blog image" />
      <p>${blog.title}</p>
      <div class="imgc">
        <img src="${blog.authorImage}" alt="author" />
        <span>${blog.author}</span>
      </div>
      <p>${blog.description.split(" ").slice(0, 10).join(" ")}...</p>
      <div class="detailCard">
        <a href="#">Read more</a>
        <div class="iconCard">
          <i class="fa-solid fa-eye"></i>
          <span>${blog.viewers}</span>
        </div>
      </div>
    </div>
  `;
}


function createCardArticle(article) {
    return `
    <div class="article-card">
      <img src="${article.image}" class="article-image">
      <div class="card-content">
        <div class="card-meta">
          <span class="category">Design</span>
          <span class="duration">3 Month</span>
        </div>
        <h2>${article.title}</h2>
        <p>${article.description.split(" ").slice(0, 7).join(" ")}</p>
        <div class="card-footer">
          <div class="author-info">
            <img src="${article.authorImage}" alt="Author" class="author-avatar">
            <span class="author-name">${article.author}</span>
          </div>
          <div class="price">
            <span class="current-price">${article.price}</span>
          </div>
        </div>
      </div>
    </div>
  `;
}
$(document).ready(async function () {
    const blogs = await getBlogs();
    const articles = await getArticls();

    blogs.forEach(blog => {
        $(".slider").append(createCard(blog));
    });

    articles.forEach(article => {
        $(".articles-section").append(createCardArticle(article));
    });


    $(".slider").slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        dots: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});