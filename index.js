var urls;

urls = [
'https://media.mehrnews.com/d/2023/08/13/4/4627178.jpg?ts=1691914172465',
'https://www.eligasht.co.uk/Blog/wp-content/uploads/2024/04/hajij-village.jpg',
'https://toirantour.com/blog/wp-content/uploads/2024/02/ToIranTour-How-to-Get-to-Kermanshah-1024x683.jpg',
'https://www.saadatrent.com/storage/www/blogs/2024/eng/1402.11.14/kermanshah-people.webp',
'https://i.ytimg.com/vi/-8pMsqUtXIA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD_ZufH2WWJ_LoaAO0PWPJUddJMtg',
'https://idsb.tmgrup.com.tr/ly/uploads/images/2022/03/21/192145.jpg',
'https://media.tehrantimes.com/d/t/2023/11/10/4/4732138.jpg?ts=1699621389488',
];

document.getElementById('next').addEventListener('click', (event) => {
  let element_image = document.getElementById('carosel-image');
  urls.push(urls.shift());
  element_image.setAttribute("src", urls[0]);
});

document.getElementById('previous').addEventListener('click', (event) => {
  let element_image2 = document.getElementById('carosel-image');
  urls.unshift(urls.pop());
  element_image2.setAttribute("src", urls[0]);
});
