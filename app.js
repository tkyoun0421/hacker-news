const ajax = new XMLHttpRequest();
const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json';
ajax.open('GET', NEWS_URL, false);
ajax.send();

const newsFeed = JSON.parse(ajax.response);
const ul = document.createElement('ul');
document.getElementById('root').appendChild(ul);

for (let i = 0; i < 10; i++) {
    const li = document.createElement('li');
    ul.appendChild(li);

    li.innerHTML = newsFeed[i].title;
}
