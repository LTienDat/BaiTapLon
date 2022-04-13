//yourname
let yourname = document.getElementById('yourname');
let statuOfyourname = document.getElementById('statuOfyourname');

yourname.addEventListener('focusout', leaveyourname)
function leaveyourname(){
    var yournameRegex = /^[a-zA-Z ]{1,30}$/;
    if(yournameRegex.test(yourname.value)){
        statuOfyourname.textContent = 'hợp lệ'
        statuOfyourname.style.color = 'green'
    }
    else{
        statuOfyourname.textContent = 'không hợp lệ(không có dấu)'
        statuOfyourname.style.color = 'red'
    }
}

//email
let email = document.getElementById('email');
let statusOfemail = document.getElementById('statusOfemail')

email.addEventListener('focusout', leaveemail)
function leaveemail(){   
    var emailRegex = /\S+@\S+.\S+/;
    if(emailRegex.test(email.value)){
        statuOfemail.textContent = 'hợp lệ'
        statuOfemail.style.color = 'green'
    }
    else{
        statuOfemail.textContent = 'không hợp lệ'
        statuOfemail.style.color = 'red'
    }
}

// password
let password = document.getElementById('password');
let statusOfpassword = document.getElementById('statusOfpassword')

password.addEventListener('focusout', leavepassword)
function leavepassword(){   
 if( password.value.length >=7 && password.value.length <=12){
    statusOfpassword.textContent = 'hợp lệ'
    statusOfpassword.style.color = 'green'
 }else{
    statusOfpassword.textContent = 'không hợp lệ(độ dài 7-12)'
    statusOfpassword.style.color = 'red'
 }
}

// comfirmpassword
let comfirmpassword = document.getElementById('comfirmpassword');
let statusOfcomfirmpassword = document.getElementById('statusOfcomfirmpassword')

comfirmpassword.addEventListener('focusout', leavecomfirmpassword)
function leavecomfirmpassword(){   
 if(comfirmpassword.value == password.value){
    statusOfcomfirmpassword.textContent = 'hợp lệ'
    statusOfcomfirmpassword.style.color = 'green'
 }else{
    statusOfcomfirmpassword.textContent = 'không hợp lệ(độ dài 5-12)'
    statusOfcomfirmpassword.style.color = 'red'

}
}
//address
let address = document.getElementById('address');
let statusOfaddress = document.getElementById('statusOfsddress')

address.addEventListener('focusout', leaveaddress)
function leaveaddress(){   
    var addressRegex = /\S+@\S+.\S+/;
    if(addressRegex.test(address.value)){
        statuOfaddress.textContent = 'hợp lệ'
        statuOfaddress.style.color = 'green'
    }
    else{
        statuOfaddress.textContent = 'không hợp lệ'
        statuOfaddress.style.color = 'red'
    }
}

//phone number
let phone = document.getElementById('phone');
let statusOfphone = document.getElementById('statusOfphone')

phone.addEventListener('focusout', leavephone)
function leavephone(){   
    var phoneRegex = /\S+@\S+.\S+/;
 if( phoneRegex.test(phone.value)){
    statusOfphone.textContent = 'hợp lệ'
    statusOfphone.style.color = 'red'
 }else{
    statusOfphone.textContent = 'Optional'
    statusOfphone.style.color = 'red'
 }
}