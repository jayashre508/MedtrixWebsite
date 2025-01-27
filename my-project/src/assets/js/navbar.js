function toggleClass(ele, classadd, classRemove) {
    ele.classList.remove(classRemove);
    ele.classList.add(classadd);
}

var btns = document.querySelectorAll(".dropdown-L1-mob");
btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        let id = btn.getAttribute("data-target");
        let icon = btn.querySelector("a > i");
        if (
            document.getElementById(id).style.display === "none" ||
            document.getElementById(id).style.display === ""
        ) {
            document.getElementById(id).style.display = "block";
            toggleClass(icon, "fa-chevron-up", "fa-chevron-down");
        } else {
            document.getElementById(id).style.display = "none";
            toggleClass(icon, "fa-chevron-down", "fa-chevron-up");
        }
    });
});

function closeNav1() {
    document.querySelectorAll(".level1Dropdown").forEach((a) => {
        a.style.display = "none";
        // a.querySelector(".dropdown-L2-mob").style.display = "none";
    });
    btns.forEach((btn) => {
        toggleClass(
            btn.querySelector("a > i"),
            "fa-chevron-down",
            "fa-chevron-up"
        );
        btn.querySelector("a > i").classList.remove("fa-chevron-up");
        btn.querySelector("a > i").classList.add("fa-chevron-down");
    });
    document.getElementById("myNav").style.width = "0%";
    $("body").css("overflow", "");
    setTimeout(function () {
        $("#menu-icon1").fadeIn();
    }, 500);
}