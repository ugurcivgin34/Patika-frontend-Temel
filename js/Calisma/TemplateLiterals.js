
// let title = document.getElementById('title')
// title.innerHTML = "Değğişen Bilgi"
// console.log(title.innerHTML)


// let link = document.querySelector("ul#list>li>a")
// link.innerHTML ="jj"
// console.log(link.innerHTML)

let lastChild = document.querySelector("ul#list>li:last-child")
lastChild.innerHTML ="son oge degisti.."

let firstChild = document.querySelector("ul#list>li:first-child")
firstChild.innerHTML="ilk öge değişti"

let ulDOM = document.querySelector("ul#list")
let liDOM=document.createElement('li')

liDOM.innerHTML="Kendi oluşturduğum öge";

// ulDOM.append en sona ekler
ulDOM.prepend(liDOM)


