let tabsLeft = document.getElementsByClassName("tabs-left")[0],
    tabsRight = document.getElementsByClassName("tabs-right")[0],
    ticket = document.getElementsByClassName("ticket")[0],
    ticketTab = document.getElementsByClassName("ticketTab")[0],
    tabsLeftActive = document.querySelectorAll(".tabs-left.active"),
    tabsRightActive = document.querySelectorAll(".tabs-right.active");

  
 

    tabsRight.addEventListener ("click", function() {
        tabsLeft.classList.remove("active")
        tabsRight.classList.add("active")
        
        
    });

    tabsLeft.addEventListener ("click", function() {
        tabsRight.classList.remove("active")
        tabsLeft.classList.add("active")
        
    });

































// let tabs = document.querySelectorAll(".tabs div"),
//     content = document.querySelectorAll(".hero .ticketTab");

//     for(let i=0;i<tabs.length; i++){
//         (function(i){
//             let tab = tabs[i];
//             tab.onclick = function (){
//                 for (let j = 0; j<content.length; j++){
//                     let state = window.getComputedStyle(content[j]).state;
//                     if (state == "1") {
//                         content[j].style.display = "none"
//                     }
//                 }
//                 content[i].style.display = "block"
//             }

//         })(i);
//     }

// console.log(content)

