function fetchRequest(){
let kanyeFetch = fetch("https://api.kanye.rest")
.then((response) => response.json())
.then((data) => {
    let para = document.querySelector("p");
    para.innerHTML = (`${data.quote}`)
    console.log(data)
})
}

let btn = document.querySelector("button").addEventListener("click", function(event){
    event.preventDefault()
    fetchRequest()
})

const randomLocation = () => {
    return `${Math.floor(Math.random() * 600)}px`;
  };



  const brImage = document.getElementById("brPic")

  brImage.addEventListener("mouseover", (event) => {
    event.preventDefault()  
    brImage.style.marginLeft = (`${randomLocation()}`)
    brImage.style.marginTop = (`${randomLocation()}`)

  })



  function changeBackground(){
      const fetchImage = fetch("https://picsum.photos/1000")
      .then((data) => {
          
        document.body.style.backgroundImage = "url('https://picsum.photos/900')"
      })

      
  }

  changeBackground()