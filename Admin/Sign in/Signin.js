//yourname
let yourname = document.getElementById('yourname');
let statusOfyourname = document.getElementById('statusOfyourname');

yourname.addEventListener('focusout', leaveyourname)
function leaveyourname(){
    var yournameRegex = /^[a-zA-Z ]{1,30}$/;
    if(yournameRegex.test(yourname.value)){
        statusOfyourname.textContent = 'hợp lệ'
        statusOfyourname.style.color = 'green'
    }
    else{
        statusOfyourname.textContent = 'không hợp lệ(không có dấu)'
        statusOfyourname.style.color = 'red'
    }
}


let Email = document.getElementById('Email');
let statusOfEmail = document.getElementById('statusOfEmail');

Email.addEventListener('focusout', leaveEmail)
function leaveEmail(){
    var EmailRegex = /\S+@\S+.\S+/;
    if(EmailRegex.test(Email.value)){
        statusOfEmail.textContent = 'hợp lệ'
        statusOfEmail.style.color = 'green'
    }
    else{
        statusOfEmail.textContent = 'không hợp lệ'
        statusOfEmail.style.color = 'red'
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
let statusOfaddress = document.getElementById('statusOfaddress')

address.addEventListener('focusout', leaveaddress)
function leaveaddress(){   
    var addressRegex = /\S+@\S+.\S+/;
    if(addressRegex.test(address.value)){
        statusOfaddress.textContent = 'hợp lệ'
        statusOfaddress.style.color = 'green'
    }
    else{
        statusOfaddress.textContent = 'không hợp lệ'
        statusOfaddress.style.color = 'red'
    }
}

//phone number
let phone = document.getElementById('phone');
let statusOfphone = document.getElementById('statusOfphone')

phone.addEventListener('focusout', leavephone)
function leavephone(){   
    var phoneRegex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
 if( phoneRegex.test(phone.value)){
    statusOfphone.textContent = 'hợp lệ'
    statusOfphone.style.color = 'red'
 }else{
    statusOfphone.textContent = 'Không hợp lệ'
    statusOfphone.style.color = 'red'
 }
}