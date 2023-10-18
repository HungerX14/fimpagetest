var input1 = document.getElementById("input1");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var div = document.getElementById("valueInput");

//alert("test");

btn1.addEventListener("click", () => {
    //console.log(input1.value);
    if (input1.value === "") {
        alert('Remplis le champs merci');
    } else {
        div.innerHTML = input1.value;
    }
});

btn2.addEventListener("click", () => {
    setTimeout(() => { alert("Ceci est une alerte") }, 5000)
})

btn3.addEventListener("click", () => {
    btn1.classList.replace("bg-lime-400", "bg-red-400");
    btn2.classList.replace("bg-lime-400", "bg-red-400");
})

