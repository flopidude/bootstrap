/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

collapsed = false
document.getElementById("headingOne").addEventListener("click", () => {
    // lps = (document.querySelector(".accordion-item #collapseOne").classList.contains("show"))
    // console.log(document.querySelector(".accordion-item #collapseOne").classList)
    // console.log(lps)
    collapsed = !collapsed
    if (collapsed) {
        document.querySelector("#headingOne .accordion-button").textContent = "EAT shit";
    }
    else {
        document.querySelector("#headingOne .accordion-button").textContent = "DONT EAT shit";
    }
}
);