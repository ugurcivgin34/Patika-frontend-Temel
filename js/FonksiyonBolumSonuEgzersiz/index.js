
let counter = 0;
let counterDOM = document.querySelector('#counter')
let increaseDom = document.querySelector('#increase')
let decreaseDom = document.querySelector('#decrease')

counterDOM.innerHTML = counter

increaseDom.addEventListener("click", clickEvent)
decreaseDom.addEventListener("click", clickEvent)
function clickEvent() {
    console.log(this.id)
    this.id == "increase" ? counter += 1 : counter -= 1
    counterDOM.innerHTML = counter;


}