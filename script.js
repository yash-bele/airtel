const menu_bar = document.querySelector("#menu-bar");
const res_alpha_bg = document.querySelector(".res-alpha-bg");
const res_action = document.querySelectorAll(".res-action");

const res_ul = document.querySelector(".res-ul");
const res_bottom = document.querySelector(".res-bottom");
const res_bi = document.querySelectorAll(".res-bi");
const res_hidden_ul = document.querySelectorAll(".res-hidden-ul");

menu_bar.addEventListener("click", () => {
    res_alpha_bg.style.display = "block";
    res_ul.style.marginLeft = "0%";
    res_bottom.style.marginLeft = "0%";
});

res_alpha_bg.addEventListener("click", () => {
    res_alpha_bg.style.display = "none";
    res_ul.style.marginLeft = "-75%";
    res_bottom.style.marginLeft = "-75%";
});

res_action.forEach((i, j) => {
    i.addEventListener("click", (e) => {
        getComputedStyle(i).color == "rgb(85, 85, 85)" ?
            i.style.color = "#bb0000" :
            i.style.color = "rgb(85, 85, 85)";
        getComputedStyle(res_bi[j]).transform === "none" ?
            res_bi[j].style.transform = "rotate(-180deg)" :
            res_bi[j].style.transform = "none";
        getComputedStyle(res_hidden_ul[j]).maxHeight === "0px" ?
            res_hidden_ul[j].style.maxHeight = "315px" :
            res_hidden_ul[j].style.maxHeight = "0px";
    });
});