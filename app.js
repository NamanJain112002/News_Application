const API_key = "37b26940088040ce92931a94df8ebfb1";
const url = "https://newsapi.org/v2/everything?q=";


window.addEventListener('load',()=>fetchNews("India"));


// document.getElementsByClassName("btn")[0].addEventListener("click",()=>{
//     const got = document.getElementById("input-box").innerHTML;
//     console.log(got);
//     fetchNews(got);
// })



async function fetchNews(query){
    const response = await fetch(`${url}${query}&apiKey=${API_key}`);
    const data = await response.json();
    console.log(data);
    useData(data.articles); 
}

function useData(articles){
   const container = document.getElementById("main");
   const temp = document.getElementById("main-tem");

   container.innerHTML = "";

   articles.forEach((article) => {
    if(!article.urlToImage) return;
    //    let i=0;
       const cardclone = temp.content.cloneNode(true);
       filldata(cardclone,article);
       container.append(cardclone);
    //    i++;
   });
}

function filldata(cardclone,article){
    const newsImg = cardclone.querySelector("#newsimg");
    const newTitle = cardclone.querySelector("#newstitle");
    const newsDesc = cardclone.querySelector("#newsdesc");

    newsImg.src = article.urlToImage;
    newTitle.innerHTML = article.title;
    newsDesc.innerHTML = article.description;

    cardclone.firstElementChild.addEventListener("click",()=>{
        window.open(article.url,"_blank");
    })

}

function navlink(data){
    fetchNews(data);
}
const button = document.getElementById("btn");
const input = document.getElementById("input-box");

button.addEventListener("click",()=>{
    const query = input.value;
    if(!query) return;
    fetchNews(query)
});
