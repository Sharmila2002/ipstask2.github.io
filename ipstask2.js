 function validate()
 {
     var username=document.getElementById("user").value;
     var password=document.getElementById("pass").value;

     if(username=="infopillar20@gmail.com" && password=="ips@20")
        {
         alert("Login Successfully")
        }
     
     else{
         alert("Login Failed Please Enter Valid Username & Password ! !");
     }
 }
