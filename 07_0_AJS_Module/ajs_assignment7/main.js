const fullName = document.querySelector("#full-name")
const img = document.querySelector("img")
const age = document.querySelector("#age")
const email = document.querySelector("#email")
const phone = document.querySelector("#phone")
const additionalInfo = document.querySelector("#additional-info")
const getUserBtn = document.querySelector("#getUser")
let userAge,userEmail,userPhone;
function display(fname,lname,email,age,phone,imgurl){
    additionalInfo.innerHTML = ''
    fullName.innerText = `${fname} ${lname}`
    img.setAttribute("src",`${imgurl}`)
    userAge = age
    userEmail = email
    userPhone = phone
}
function fetchUserDetails(){
    return fetch('https://randomuser.me/api/').then((response)=>response.json()).then((json)=>{
            console.log(json)
            display(json.results[0].name.first,json.results[0].name.last,json.results[0].email,json.results[0].dob.age,json.results[0].phone,json.results[0].picture.large)
        })
    }

window.addEventListener("load", fetchUserDetails)
getUserBtn.addEventListener("click", fetchUserDetails)
age.addEventListener("click",(event)=>{
    additionalInfo.innerHTML = `<p>${userAge} yrs</p>`
})
email.addEventListener("click",(event)=>{
    additionalInfo.innerHTML = `<p>${userEmail}</p>`
})
phone.addEventListener("click",(event)=>{
    additionalInfo.innerHTML = `<p>${userPhone}</p>`
})
