import checkNumInput from "./checkNumInput";

const changeModalState = (state) => {
    const windowWidth = document.querySelectorAll("#width"),
          windowHeight = document.querySelectorAll("#height"),
          windowForm = document.querySelectorAll(".balcon_icons_img"),
          windowType = document.querySelectorAll("#view_type"),
          windowSeason = document.querySelectorAll(".checkbox");

    let windowFormNames = [
        "Трехстворчатый обычный",
        "Четырехстворчатый S-образный",
        "Четырехстворчатый Г-образный",
        "Четырехстворчатый П-образный"
    ]

    checkNumInput("#height");
    checkNumInput("#width");

    const bindPropToState = (event, elem, prop) => {
        elem.forEach((item, i) => {
            item.addEventListener(event, () => {
                switch(item.nodeName) {
                    case "INPUT" :
                        if (item.type == "checkbox") {
                            i == 0 ? state[prop] = "Холодное" : state[prop] = "Теплое";
                            elem.forEach((box, j) => {
                                box.checked = false;
                                if (i == j) {
                                    box.checked = true;
                                }
                            });
                        } else {
                            state[prop] = item.value;
                        }
                        console.log(state);
                        break;
                    case "SPAN" :
                        state[prop] = windowFormNames[i];
                        console.log(state);
                        break;
                    case "SELECT" : 
                        state[prop] = item.value;
                        console.log(state);
                        break;
                }
            });
        });
    };

    bindPropToState("click", windowForm, "form");
    bindPropToState("input", windowHeight, "height");
    bindPropToState("input", windowWidth, "width");
    bindPropToState("change", windowType, "type");
    bindPropToState("change", windowSeason, "season");
};

export default changeModalState;