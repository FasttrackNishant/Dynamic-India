let apikey = 'ddc1426c15ca42d3912775d96024176a';
let newsdata = document.getElementById('newsdata');
let xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&apiKey=ddc1426c15ca42d3912775d96024176a`);
xhr.onload = function() {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        let newshtml = "";
        articles.forEach(function(element, index) {
            orinews = `
            <div class="g-3 ">
            <div class="shadow-lg p-3 mb-5 bg-body rounded">
            <div class="card" style="width: 18rem;">
            <h4>${index+1} Breaking News </h4>
            <img src="${element.urlToImage}" class="card-img-top" alt="...">
            <div class="card-body">
                <p class="card-text">${element["title"]}</p>
                <a href="${element.url}" class="btn btn-primary">Read More</a>
                </div>
                </div>
</div></div>
          `
            newshtml += orinews;
        });
        newsdata.innerHTML = newshtml;
    } else {
        console.log('something error occurred');

    }

}

xhr.send();