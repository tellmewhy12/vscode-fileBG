// @ts-nocheck
/* eslint-disable no-undef */
console.log("Loading FileBG...");

let FileBG = {}
FileBG.config = {
    default: "https://images.alphacoders.com/985/thumb-1920-985802.png",
    plaintext: "https://img5.goodfon.com/wallpaper/nbig/2/28/tsvety-buket-bloknot-1.jpg",
    javascript: "https://www.wallpapertip.com/wmimgs/83-838172_programming-javascript.jpg",
    json: "https://wallpaperaccess.com/full/1555147.png",
    jsonc: "https://wallpaperaccess.com/full/1555147.png",
    html: "https://wallpaperaccess.com/full/4868336.jpg",
    css: "https://p4.wallpaperbetter.com/wallpaper/285/806/562/css-css3-wallpaper-preview.jpg"
}


FileBG.opacity = 0.9;


window.addEventListener("load", () => {
    FileBG.main();
})

FileBG.main = function() {
    FileBG.changeBackgroundImage();
}

FileBG.setBackgroundImage = function(path) {
    let body = document.body;
    body.style.cssText = `
    opacity: ${FileBG.opacity};
    background-image: url(${path});
    background-size: cover;
    background-repeat: no-repeat;`
}

FileBG.changeBackgroundImage = function() {
    console.log("FILEBG");
    // thanks to guy from stackoverflow
    function waitForElementToDisplay(selector, callback, checkFrequencyInMs, timeoutInMs) {
        var startTimeInMs = Date.now();
        (function loopSearch() {
            if (document.querySelector(selector) != null) {
                callback();
                return;
            } else {
                setTimeout(function() {
                    if (timeoutInMs && Date.now() - startTimeInMs > timeoutInMs)
                        return;
                    loopSearch();
                }, checkFrequencyInMs);
            }
        })();
    }

    waitForElementToDisplay(".editor-instance", () => {
        observeChanges();
    })

    function changeToConfigImage() {
        console.log("FILEBG2");
        // @ts-ignore
        let editorInstance = document.getElementsByClassName("editor-instance")[0];
        let mode = editorInstance.getAttribute("data-mode-id");
        //console.log(editorInstance);
        console.log("FileBG:", "Switched to tab with mode " + mode);
        //console.log(config);

        let foundConfig = false;
        for (let key of Object.keys(FileBG.config)) {
            if (key === mode) {
                console.log("FileBG:", "changing background image to", key);
                FileBG.setBackgroundImage(FileBG.config[key]);
                foundConfig = true;
            }
        }
        if (!foundConfig) {
            FileBG.setBackgroundImage(FileBG.config.default);
            console.log("FileBG:", "Couldn't find configuration for", mode, "using default image.");
            console.log(FileBG.config.default);
        }
    }

    function observeChanges() {
        let editorInstance = document.getElementsByClassName("editor-instance");
        // add an mutationobserver to the editor instance for getting changes
        var target = editorInstance[0];
        console.log(target);

        var observer = new MutationObserver(function (mutations) {
            mutations.forEach(function (mutation) {
                // the important code is Here
                console.log(mutation);
                if (mutation.attributeName === "data-mode-id") {
                    changeToConfigImage();
                }
            });
        });

        var observerConfig = {
            attributes: true,
            childList: false,
            characterData: false
        };

        observer.observe(target, observerConfig);
    }
}
