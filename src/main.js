console.log("hello bitch")

document.getElementById("locations").addEventListener("input", onchange)

console.log(document.getElementById("locations"))

function onchange(event) 
{
    console.log(event.target.value)
    switch(event.target.value) 
    {
        case "location1":
        {
            document.getElementById("mainimage").src="./img/AphroditesRock.jpg";
            break
        }
        case "location2":
        {
            document.getElementById("mainimage").src="./img/devilsMarblesDesk.jpg";
            break
        }
        case "location3":
        {
            document.getElementById("mainimage").src="./img/immortalBridge.jpg";
            break
        }
    }
}

