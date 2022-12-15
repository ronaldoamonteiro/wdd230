(async () => {
  const response = await fetch("./fruits.json");
  const fruitsResponse = await response.json();

  const form = document.getElementById("form");
  console.log(form);

  const freshPageButton = document.getElementById("fresh-page-submit-button");


  freshPageButton.addEventListener("click", (event) => {
    event.preventDefault();
    // console.log({ first: firstName.value });
    // console.log(data);

    const firstName = document.getElementById("first-name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const firstDrink = document.getElementById("drinks-1").value;
    const secondDrink = document.getElementById("drinks-2").value;
    const thirdDrink = document.getElementById("drinks-3").value;
    const additionalInfo = document.getElementById("additional-info").value;

    if (firstName === "" || email === "" || phone === "" || firstDrink === "empty") {
      alert("Form has invalid data! Please, fill it again!");
    }
    else {
      console.log({
        firstName,
        email,
        phone,
        firstDrink,
        secondDrink,
        thirdDrink,
      });



      let nutritionTable = {
        carbohydrates: 0,
        protein: 0,
        fat: 0,
        sugar: 0,
        calories: 0
      };

      const drinks = [firstDrink, secondDrink, thirdDrink];

      drinks.forEach(drink => {
        if (drink !== "empty") {
          const filteredFruit = fruitsResponse.filter(fruit => fruit.name === drink);

          console.log({ filteredFruit });
          nutritionTable["carbohydrates"] += filteredFruit[0]["nutritions"]["carbohydrates"];
          nutritionTable["protein"] += filteredFruit[0]["nutritions"]["protein"];
          nutritionTable["fat"] += filteredFruit[0]["nutritions"]["fat"];
          nutritionTable["sugar"] += filteredFruit[0]["nutritions"]["sugar"];
          nutritionTable["calories"] += filteredFruit[0]["nutritions"]["calories"];
        }
      });

      console.log({ nutritionTable });


      // Local Storage data

      const dataToSubmit = {
        firstName,
        email,
        phone,
        firstDrink,
        secondDrink,
        thirdDrink,
        additionalInfo
      };

      if (localStorage.getItem('drinks')) {
        console.log('ALREADY EXISTS');
      }
      localStorage.setItem('drinks', localStorage.getItem('drinks') ?
        JSON.stringify([...JSON.parse(localStorage.getItem('drinks')), dataToSubmit]) :
        JSON.stringify([dataToSubmit]));


      alert("Drink request submitted successfully!");

      // Redirects to the home page!!!
      window.location.replace("index.html")
    }
  });

  console.log({ fruitsResponse });

  const drinksOptions = document.querySelectorAll(".drinks-select");

  console.log({ drinksOptions });

  drinksOptions.forEach((drinkOption) => {
    fruitsResponse.forEach((fruit) => {
      const optionElement = document.createElement("option");
      optionElement.id = fruit.id;
      optionElement.value = fruit.name;
      optionElement.innerHTML = fruit.name;

      drinkOption.appendChild(optionElement);
    });
  });



})();