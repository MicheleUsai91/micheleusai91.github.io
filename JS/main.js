const CONSTANTS = {
    MENU_ITEMS : [
        {
            id : "about",
            name : "aboutMe",
            link : "about.html",
            desc : "About me"
        }
    ]
}

window.onload = function() {
    console.table(CONSTANTS.MENU_ITEMS);
    document.append
    const menuItems = ["Link1", "Link2", "Link3", "Link4"]
    let menu = document.getElementById("menu");
    if (menu !== null) {
        let html = "<ul>";
        menuItems.forEach((item, index) => {
            html += "<li>" + item + "</li>";
            if (index == menuItems.length-1) {
                html += "</ul>";
            }
        })
        menu.innerHTML = html;
    }
    let p = document.getElementById("test");
    if (p !== null) p.innerHTML = CONSTANTS.MENU_ITEMS[0].desc;
}

function test(input) {
    console.log(input);
}