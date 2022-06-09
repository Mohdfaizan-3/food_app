let searchRecipie = async (url) => {

  try {
    let res = await fetch(url);
    let data = await res.json();
    // console.log(data)
    return data.meals;
  } catch (error) {
    console.log(error);
  }
};

const append = (response,container) => {
 // let container = document.getElementById("container");
  container.innerHTML = null;
  response.forEach(
    ({ strMealThumb, strMeal, strInstructions }) => {
      let title = document.createElement("h2");
      let box1 = document.createElement("div");
      let img = document.createElement("img");
       let p = document.createElement("p");
       p.innerText = strInstructions;
      title.innerText = strMeal;
      img.src = strMealThumb;
      box1.append(img, title,p);
      container.append(box1);
    }
  );
};

const main = async (url) => {
  //let input = document.getElementById("in").value;
  // console.log(input)
  let response = await searchRecipie(url);
  console.log(response);
  let data = await append(response);
  console.log(data)
};

main();

export  {main,searchRecipie,append}