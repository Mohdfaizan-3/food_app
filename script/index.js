let data = JSON.parse(localStorage.getItem("man")) || [];
 document.getElementById('name').innerHTML=data


let searchRecipie = async (input) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`;
  try {
    let res = await fetch(url);
    let data = await res.json();
    //console.log(data.meals)
    return data.meals;
  } catch (error) {
    console.log(error);
  }
};

const append = (response) => {
  let box1 = document.getElementById("box1");
  box.innerHTML = null;
  response.forEach(
    ({ strMealThumb, strMeal, strInstructions }) => {
      let container = document.getElementById("container");
      container.innerHTML = null;
      let title = document.createElement("h2");
      title.innerText = strMeal;
      box.append(title);
      title.addEventListener("click", function rec() {
        let title = document.createElement("h2");
        let box1 = document.createElement("div");
        let img = document.createElement("img");
        let p = document.createElement("p");
        p.innerText = strInstructions;
        title.innerText = strMeal;
        img.src = strMealThumb;
        box1.append(img, title, p);
        container.append(box1);
      });
    }
  );
};

const main = async () => {
  let input = document.getElementById("in").value;
  // console.log(input)
  let response = await searchRecipie(input);
  // console.log(response)
  let data = await append(response);
};

let id;
document
  .getElementById("in")
  .addEventListener("input", function () {
    debounce(main, 200);
  });
function debounce(func, delay) {
  if (id) {
    //for clearing previous id .. like for avengers .. itype a then ave then ave so previous ids should be clear
    clearTimeout(id);
  }

  id = setTimeout(function () {
    func();
  }, delay);
}
//    console.log("fds")
