
// 1:Formu Seç
// 2:Input Bilglisini UL içerisine Ekle
// 3:Form içindeki bilgiyi sıfırla
// 4:Eğer forma bilgi girilmezse kullanıcıyı uyar

let userFormDom = document.querySelector('#userForm')
userFormDom.addEventListener('submit', formHandler)
const alertDOM = document.querySelector('#alert')

const alertFunction = (title, message, className = "warning") => `
<div class="alert alert-${className} alert-dismissible fade show" role="alert">
  <strong>${title}</strong> ${message}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`

function formHandler(event) {
    event.preventDefault() //browser da etkilişim yaptığımız da hemen bilgiler siliniyordu,kendini yeniliyordu yani.Bunun önüne gçeme kiçin bu yapıyı kullandık
    const USER_NAME = document.querySelector("#username")
    const SCORE = document.querySelector("#score")

    if (USER_NAME.value && SCORE.value) {
        addItem(USER_NAME.value, SCORE.value) //gönderdikten sonra sıfırladık
        USER_NAME.value = ""
        SCORE.value = ""
    } else {
        if (USER_NAME.value===null || SCORE.value===null) {
            alertDOM.innerHTML = alertFunction("Başlık Bilgisi", "Eksik Bilgi Girdiniz", "danger")
        }
      
    }

}
let userListDom = document.querySelector('#userList')

const addItem = (userName, score) => {
    let liDOM = document.createElement('li')
    liDOM.innerHTML = `${userName} 
    <span class="badge bg-primary rounded-pill'>
    ${score} </span>`
    liDOM.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center')
    userListDom.append(liDOM)
}

