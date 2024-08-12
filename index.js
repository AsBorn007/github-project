let show = document.querySelector(".hero-section");
let img = document.createElement("img");

img.src = '/img/b4.jpg';
img.style.width = "100%";

show.appendChild(img);


let min = document.querySelector(".minus");
let dis = document.querySelector("#display");
let plus = document.querySelector(".plus");

let num = 0;

min.addEventListener("click", () => {
    num --;
    if(num < 0) {
        dis.value = 0;
    }else {
        dis.value = num;
    }
    console.log(min, "minus");
})

plus.addEventListener("click", () => {
    num ++;
    if(num > 0) {
        dis.value = num;
    }
    console.log(plus, "add");
})

let arr = [1,2,3,4,5]
let b = arr.reduce(accum, curtval)


        