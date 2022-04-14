let user = '2051060429@e.tlu.edu.vn';
let pass = '123456';


function check(){
    // let usernameRegex = /\S+@\S+.\S+/;
    let username =$('#username').val();
    let password =$('#password').val();
    if(username == user && password == pass){
        return true
    }
    return false
}1
$('#login').click(function(e){
    e.preventDefault();
    if(check()){
        window.location.href = '../Admin.html';
    }else{
        alert('Tài khoản mật khẩu không đúng')
    }
})
