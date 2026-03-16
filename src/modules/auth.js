export function registerUser(){
    const email = document.getElementById("regEmail").value;
    const password = document.getElementById("regPassword").value;

    const user = {email, password};

    localStorage.setItem("user", JSON.stringify(user))

    alert("Registered Successfully");

}

export function loginUser(){
    const storedUser = sessionStorage.parse(localStorage.getItem("user"));

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    if (storedUser && storedUser.email === email && storedUser.password === password){
        document.getElementById("auth").style.display="none";
        document.getElementById("app").style.display="block";
    }
    else{
        alert("Invalid credentials");
    }
}