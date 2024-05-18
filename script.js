// Navbar Code

function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}


//Copy Button Code

let copybtn1 = document.querySelector('.copybtn1');
copybtn1.addEventListener("click",()=>{
    let coupon1 = document.querySelector('.coupon1');
    coupon1.select();
    navigator.clipboard.writeText(coupon1.value);
    copybtn1.value="copied.";
})

// btn2
let copybtn2 = document.querySelector('.copybtn2');
copybtn2.addEventListener("click",()=>{
let coupon2 = document.querySelector('.coupon2');
    coupon2.select();
    navigator.clipboard.writeText(coupon2.value);
    copybtn2.value="copied.";
})

//btn3
let copybtn3 = document.querySelector('.copybtn3');
copybtn3.addEventListener("click",()=>{
let coupon3 = document.querySelector('.coupon3');
    coupon3.select();
    navigator.clipboard.writeText(coupon3.value);
    copybtn3.value="copied.";
},)


// typed js

var typed = new Typed(".typed",{
    strings:['Fruit Battlegrounds','PlayerUnknown Battleground', 'The Roblox Studio Game'],
    typeSpeed: 140,
    backSpeed: 50,
    loop: true
})


