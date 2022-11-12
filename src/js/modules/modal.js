const modal = () => {

    const showModal = (trigger, popup, windows, scroll) => {
        trigger.forEach(item => {
            item.addEventListener("click", (e) => {
                if (e.target) {
                    e.preventDefault();
                }
                windows.forEach(window => {
                    window.style.display = "none";
                });
                document.body.style.overflow = "hidden";
                popup.style.display = "block";
                document.body.style.marginRight = `${scroll}px`;
            });
        });
    };

    const calcScroll = () => {
        let div = document.createElement("div");
        div.style.width = "50px";
        div.style.height = "50px";
        div.style.overflowY = "scroll";
        div.style.visibility = "hidden";

        document.body.appendChild(div);

        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }

    function showModalByTime(selector, time) {
        setTimeout(function() {
            document.querySelector(selector).style.display = "block";
            document.body.style.overflow = "hidden";
        }, time);
    }

    const closeModal = (popup, close) => {
        popup.addEventListener("click", (e) => {
            if (e.target === popup) {
                document.body.style.overflow = "visible";
                popup.style.display = "none";
            }
        });
        close.addEventListener("click", () => {
            document.body.style.overflow = "visible";
            popup.style.display = "none";
        });
    };

    const bindModals = (triggerSelector, popupSelector, closeSelector) => {
        const trigger = document.querySelectorAll(triggerSelector), 
            popup = document.querySelector(popupSelector),
            close = document.querySelector(closeSelector),
            windows = document.querySelectorAll("[data-modal]"),
            scroll = calcScroll();
            
        showModal(trigger, popup, windows, scroll);
        closeModal(popup, close);
    };

    bindModals(".popup_engineer_btn", ".popup_engineer", ".popup_engineer .popup_close");
    bindModals(".phone_link", ".popup", ".popup .popup_close");
    bindModals(".popup_calc_btn", ".popup_calc", ".popup_calc_close");
    bindModals(".popup_calc_button", ".popup_calc_profile", ".popup_calc_profile_close");
    bindModals(".popup_calc_profile_button", ".popup_calc_end", ".popup_calc_end_close");
    // showModalByTime(".popup", 60000);
};

export default modal;