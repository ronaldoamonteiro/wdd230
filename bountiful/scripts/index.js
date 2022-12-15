(async () => {
  const response = await fetch('./data.json');
  const data = await response.json();


  console.log(data);

  const imagesList = document.getElementById("images-list");

  for (let i = 0; i < data.length; i++) {
    const node = document.createElement("div");
    node.classList.add("reduced-image");
    const image = document.createElement("img");
    // Adds the 'src' attribute of the image
    image.src = data[i].path;
    // Adds the 'id' attribute of the image
    image.id = `image-${i}`;
    node.appendChild(image);
    imagesList.appendChild(node);



    node.addEventListener('click', (info) => {
      const clickId = info.path[0].id;
      const filteredId = clickId.match(/(?<=\-)\d+$/gm)[0];
      console.log({ filteredId });
      console.log('HERE IS THE INFO OF THIS GUY: ', filteredId);

      // Sets the new main image after the click
      const mainImage = document.getElementById("main-image");
      mainImage.innerHTML = "";

      const newImageContainer = document.createElement("div");
      newImageContainer.classList.add("main-image");
      const newImageElement = document.createElement("img");
      newImageElement.src = data[filteredId].path;
      newImageContainer.appendChild(newImageElement);

      mainImage.appendChild(newImageContainer);

      // Updates the title and its description
      const title = document.getElementById("title");
      const titleString = data[filteredId].title;

      const firstPartOfTheTitle = titleString.match(/\w+(?=\s)/gm)[0];
      console.log({ firstPartOfTheTitle });
      const boldStyledTitle = document.createElement("b");
      boldStyledTitle.innerHTML = firstPartOfTheTitle;

      title.innerHTML = '';
      title.appendChild(boldStyledTitle);

      title.innerHTML += ' ' + titleString.match(/(?<=\s).*$/gm)[0];

      const description = document.getElementById("description");
      description.innerHTML = data[filteredId].description;

    });

    const currentNumberOfDrinks = JSON.parse(localStorage.getItem("drinks"));

    const numberOfDrinks = document.getElementById("number-of-drinks");
    numberOfDrinks.innerHTML = currentNumberOfDrinks.length;

    const drinksToCourtesy = document.getElementById("number-of-drinks-to-courtesy");
    drinksToCourtesy.innerHTML = 10 - currentNumberOfDrinks.length;

  }

})();