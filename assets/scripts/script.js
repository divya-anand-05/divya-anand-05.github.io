function passwordGenerator(){
    var upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var lowerCase="abcdefghijklmnopqrstuvwxyz"
    var numbers="0123456789"
    var symbols="!@#$+-_()*"

    var length=parseInt(document.getElementById('length').value);
    if(isNaN(length)||length<4 || length>30){
        alert("Enter Valid Number");
        return;
    }

    var useUpperCase=document.getElementById('uppercase').checked;
    var useLowerCase=document.getElementById('lowercase').checked;
    var useNumbers=document.getElementById('numbers').checked;
    var useSymbols=document.getElementById('symbols').checked;

    var charSet='';
    if(useUpperCase){
        charSet+=upperCase;
    }
    if(useLowerCase){
        charSet+=lowerCase;
    }
    if(useNumbers){
        charSet+=numbers;
    }
    if(useSymbols){
        charSet+=symbols;
    }

    var password='';
    for(var i=0; i<length; i++){
        var randomIndex=Math.floor(Math.random()*charSet.length);
        password+=charSet.charAt(randomIndex);
    }
    document.getElementById('password').value=password;
}

function copyPassword() {
    var passwordInput=document.getElementById('password');
    passwordInput.select();
    document.execCommand('copy')
  }