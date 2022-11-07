
 //validate email

 let email=document.form.value;
 const re =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

 if(!re.test(String(email).toLowerCase())){
    alert("Invalid Email.");
    return false
 }






