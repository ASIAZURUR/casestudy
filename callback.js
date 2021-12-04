let err=document.getElementById("error1");
let err2=document.getElementById("error2");
  let user=document.getElementById('username');
  let pass=document.getElementById("password");
  let submit=document.getElementById("form")
  function match(user,pass,userCheck,passCheck)
  {
      var usercheck=userCheck(user);
      var passcheck=passCheck(pass);
      if(usercheck &&  passcheck){
          window.location.href="todo.html";
          return false;}
    
  }
  function userCheck()
  {
     if(user.value=="admin"){
         err.innerHTML="";
         user.style.border="2px solid green";
         return true;
     }
     else{
         err.innerHTML="Invalid username";
         user.style.border="2px solid red";
         
         return false;
     } 
  }
  function passCheck()
  {
    if(pass.value==12345){
        err2.innerHTML="";
        pass.style.border="2px solid green";
        return true;
    }
    else{
        err2.innerHTML="Invalid password";
        pass.style.border="2px solid red";
         return false;
    } 
 }
 submit.onsubmit = function() {
    return match(user.value, pass.value, userCheck,passCheck);
  }
  