import "./slider";
import modal from "./modules/modal";
import forms from "./modules/forms";
import tabs from "./modules/tabs";
import changeModalState from "./modules/changeModalState";
import works from "./modules/workImages";
import timer from "./modules/timer";


window.addEventListener("DOMContentLoaded", () => {
    "use_strict";

    let modalState = {};
    let deadline = "2023-12-31";

    modal();
    changeModalState(modalState);
    forms(modalState);
    tabs(".glazing_slider", ".glazing_block > a", ".glazing_content", "active");
    tabs(".decoration_slider", ".no_click > a ", ".decoration_content > div > div", "after_click");
    tabs(".balcon_icons", ".balcon_icons_img > img", ".popup_calc_content > div > img", "do_image_more", "inline");
    timer(".container1", deadline);
    works();
    
});

