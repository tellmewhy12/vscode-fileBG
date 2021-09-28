// @ts-nocheck
/* eslint-disable no-undef */
console.log("Loading FileBG...");

let FileBG = {}
FileBG.utility = {};

FileBG.config = {
    default: "https://images.alphacoders.com/985/thumb-1920-985802.png",
    plaintext: "https://img5.goodfon.com/wallpaper/nbig/2/28/tsvety-buket-bloknot-1.jpg",
    javascript: "https://www.wallpapertip.com/wmimgs/83-838172_programming-javascript.jpg",
    json: "https://wallpaperaccess.com/full/1555147.png",
    jsonc: "https://wallpaperaccess.com/full/1555147.png",
    html: "https://wallpaperaccess.com/full/4868336.jpg",
    css: "https://p4.wallpaperbetter.com/wallpaper/285/806/562/css-css3-wallpaper-preview.jpg"
}

FileBG.opacity = 0.05;

// available modes: fullscreen, fullscreen_notitle, editor, editor_extended, panel, sidebar, sidebar_extended
FileBG.mode = "fullscreen_notitle";

// todo configuration for specific files

window.addEventListener("load", () => {
    FileBG.main();
})

FileBG.main = function() {
    // add element to dom having the background image in it
    FileBG.element = FileBG.addElement();
    
    // set to the right background modes
    FileBG.changeBackgroundMode(FileBG.mode)

    // add observer to change bg image
    FileBG.observeChangeBackground();
}

FileBG.addElement = function () {
    let div = document.createElement("div");
    div.classList.add("filebg-background-div");
    div.id = "filebg-background-div";
    div.style.cssText = `
        opacity: 0.1;
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-position: center center;
        width: 100vw;
        height: 100vh;
        z-index: 500;
        position: absolute;
        pointer-events: none;
        `
    document.body.append(div);
    return div;
}

FileBG.changeBackgroundMode = function(mode) {
    if (mode == "fullscreen") {
        FileBG.element.style.width = "100vw";
        FileBG.element.style.height = "100vh";
    } else {
        FileBG.element.style.width = "100%";
        FileBG.element.style.height = "100%";
    }
    FileBG.utility.waitForElementToDisplay('#workbench\\.parts\\.editor', () => {
        switch (mode) {
            case "fullscreen":
                document.body.prepend(FileBG.element);
                break;
            case "fullscreen_notitle":
                let fullscreenNoT = document.getElementsByClassName("split-view-view visible")[1];
                fullscreenNoT.prepend(FileBG.element);
                break;
            case "editor":
                let editor = document.getElementById("workbench.parts.editor");
                editor.prepend(FileBG.element);
                console.log(editor);
                break;
            case "editor_extended":
                let editorExt = document.getElementById("workbench.parts.editor");
                editorExt.prepend(FileBG.element);
                FileBG.element.style.height = "100vh";
                break;
            case "panel":
                let panel = document.getElementById("workbench.parts.panel");
                panel.prepend(FileBG.element);
                break;
            case "sidebar":
                let sidebar = document.getElementById("workbench.parts.sidebar");
                sidebar.prepend(FileBG.element);
                break;
            case "sidebar_extended":
                let sidebarExt = document.getElementById("workbench.parts.sidebar");
                sidebarExt.prepend(FileBG.element);
                FileBG.element.style.width = "100vw";
                break;
        }
    });
}

FileBG.setBackgroundImage = function(path, element) {
    console.log("FileBG:", "changing background image to", path, "at", element);
    element.style.opacity = FileBG.opacity;
    element.style.backgroundImage = `url(${path})`;
}

FileBG.observeChangeBackground = function() {
    FileBG.utility.waitForElementToDisplay(".editor-instance", () => {
        observeChanges();
    })

    function changeToConfigImage() {
        // @ts-ignore
        let editorInstance = document.getElementsByClassName("editor-instance")[0];
        let mode = editorInstance.getAttribute("data-mode-id");
        //console.log(editorInstance);
        console.log("FileBG:", "Switched to tab with mode " + mode);
        //console.log(config);

        // get the right background image
        let imagePath = "";
        let foundConfig = false;
        for (let key of Object.keys(FileBG.config)) {
            if (key === mode) {
                imagePath = FileBG.config[key]
                foundConfig = true;
            }
        }
        if (!foundConfig) {
            imagePath = FileBG.config.default;
            console.log("FileBG:", "Couldn't find configuration for", mode, "using default image.");
            console.log(FileBG.config.default);
        }
            //element = editorInstance.getElementsByClassName("view-lines monaco-mouse-cursor-text")[0];
        FileBG.setBackgroundImage(imagePath, FileBG.element);
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


FileBG.utility.waitForElementToDisplay = function(selector, callback, checkFrequencyInMs, timeoutInMs) {
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
