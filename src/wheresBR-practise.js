let pokeFetch = fetch("https://pokeapi.co/api/v2/pokemon/ditto")
  .then((response) => response.json())
  .then((data) => {

    let para = document.querySelector("p");
    para.textContent = (`${data.name}`);
    console.log(data)
    console.log(data.name);
  });

function returnName(data) {
 

}

returnName()