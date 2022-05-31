document.querySelector("#input").addEventListener("keydown", (e) => {
  if (e.key == "Enter")
    apiRequest();
});


apiRequest = () => {

  document.querySelector(".item").textContent = "";

  // const value = 'melon';

  const url = 'https://api.unsplash.com/search/photos?query=`+input.value+`&per_page=30&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo';

  fetch(url)

    .then(response => {
      if (!response.ok) throw Error(response.statusText);

      return response.json();
     })

     .then(data => {
        loadImages(data);
     })

     .catch(error => console.log('error in getting photos', error));
};


loadImages = (data) => {

  let images = data.results;

  for(let i = 0;i < images.length;i++){
    let image = document.createElement("div");
    div.style.background = `url(${image.urls.full})`;
    document.querySelector(".item").appendChild(image);
  }
};
