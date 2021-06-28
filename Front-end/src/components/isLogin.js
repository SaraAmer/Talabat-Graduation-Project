class login{

islogin=()=>{
if(localStorage['jwt'] != "undefined"){
return true;
}
else {
    return false;
}
}
logedUser=()=>{
    
}
}

export default login