window.onload = init;
let menus  = ["selected", "", "", ""];

function init() {
    menus.map(menu => {
        if(menu === "selected"){
            document.getElementById(`${menu.indexOf("selected")}`).className = "selected"
        }
    });
}

for(let i = 0; i<4; i++){
    document.getElementById(`${i}`).onclick = click;
}

function click(num) {
    const index = Number(num.target.id);
    // ele = document.getElementById(`${index}`);
    eles = [];
    for(let i =0; i<4; i++){
        eles[i] = document.getElementById(`${i}`);
    }
    eles.map(ele => {
        if(ele.className === "selected" && Number(ele.id) !== index ){
            ele.className = "";
        }else if(ele.id === String(index)) {
            ele.className = "selected";
        }
    });


    // menus.map(menu => {
    //     if(menu === "selected"){
    //         menu = "";
    //         ele = document.getElementById(`${menu.indexOf("selected")}`);
    //         ele.className = ele.className.replace("selected", "");   
    //     }else {
    //         menu[index] = "selected";
    //         document.getElementById(`${index}`).className += "selected";
    //     }
        
    // });
}


window.onscroll = function(){
    scrollFunction();
};

const img = document.querySelector('#logo');


function scrollFunction() {
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        document.querySelector('.nav').style.padding = "12px 24px";
        document.querySelector('.nav').style.backgroundColor = "rgba(103, 157, 202, 0.85)";
        img.style.height = "48px";
    }else{
        document.querySelector('.nav').style.padding = "24px";
        document.querySelector('.nav').style.backgroundColor = "transparent";
        img.height = "56px";
    }
}

