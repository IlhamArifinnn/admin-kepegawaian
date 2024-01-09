function login(){
    let username = document.getElementById("mail").value;
    let password = document.getElementById("pass").value;

    if(username === "user@gmail.com" && password === "12345"){

      document.getElementById("form").action = "dahsboar.html";

    } else{
      alert("username atau password salah!");
    }

  }