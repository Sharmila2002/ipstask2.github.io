 function validate()
 {
     var user=document.getElementById("email").Value;
     var pass=document.getElementById("pass").Value;

     if((user !="InfoPillar" && pass!="ips@21") ){
         alert("Please Enter Correct Username as well Password !")

     }
     else if(user != "Infopillar")
     {
         alert("Please Enter Valid Username!")
     }
    else if(pass != "ips@21")
    {
        alert("Please Enter Valid Password!")
    }
     else if (user=="InfoPillar" && pass=="ips@21")
     {
         alert("Login Successfully");
         return false;
     }
     else{
         alert("Login Failed Please try Again !");
     }
 }