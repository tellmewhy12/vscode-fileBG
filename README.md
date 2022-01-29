### Custom Background Images for VSCode!

Custom background images for languages in vscode. Quick Demonstration:

https://user-images.githubusercontent.com/71931749/133819638-9b65fea0-573f-4861-ad69-fe88564c916a.mp4

This extension runs on the vscode custom-css extension.

https://github.com/be5invis/vscode-custom-css

### Release Notes v21.1

Added more options to cover different areas of your background. 🎴

 - You can only cover your editor area now, for example
 - available modes: fullscreen, fullscreen_notitle, editor, editor_extended, panel, sidebar, sidebar_extended

```javascript
// available modes: fullscreen, fullscreen_notitle, editor, editor_extended, panel, sidebar, sidebar_extended
FileBG.mode = "fullscreen_notitle";
```
You can choose one of the modes.

### Installation

1. Download and install the Custom CSS and JS Loader extension from the official link: https://marketplace.visualstudio.com/items?itemName=be5invis.vscode-custom-css
2. Download the latest FileBG .js file [here](https://github.com/mangoepic/vscode-fileBG) from the releases page
3. Add this code to your settings.json (<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> -> Open Settings (JSON))
```javascript
"vscode_custom_css.imports": [
        "file:///D:/path/to/FileBG.js",
],
```
4. Don't forget to insert your own path to the FileBG.js file on your computer
5. Run VSCode with Admin priviliges
6. <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> -> Reload Custom CSS and JS, click Restart
7. There will be a notice that vscode's files have been modified by the CSS loader, you can disable it with the cog and "Don't show again".

It should work now! If it doesn't try to bugfix the Custom CSS JS loader extension.






### Wallpaper Configuration

Open FileBG.js from the location you saved it.

```javascript
FileBG.config = {
    default: "https://images.alphacoders.com/985/thumb-1920-985802.png",
    plaintext: "https://img5.goodfon.com/wallpaper/nbig/2/28/tsvety-buket-bloknot-1.jpg",
    javascript: "https://www.wallpapertip.com/wmimgs/83-838172_programming-javascript.jpg",
    json: "https://wallpaperaccess.com/full/1555147.png",
    jsonc: "https://wallpaperaccess.com/full/1555147.png",
    html: "https://wallpaperaccess.com/full/4868336.jpg",
}

FileBG.opacity = 0.9;
```

You can just change the links to the images here.
If you want to add your own languages just go into the VSCode devtools (Help -> Toggle Developer Tools)
and filter for "FileBG" in the console.

When switching tab to the filetype tab you want to add there should appear the message "Switched to tab with mode xxx"
The "xxx" is what the filetype is named in vscode

https://user-images.githubusercontent.com/71931749/133821798-b3f42d13-9f4b-4648-8757-0d9f0711d685.mp4

Example:
> "Switched to tab with mode css"
> 
```javascript
FileBG.config = {
    default: "https://images.alphacoders.com/985/thumb-1920-985802.png",
    plaintext: "https://img5.goodfon.com/wallpaper/nbig/2/28/tsvety-buket-bloknot-1.jpg",
    javascript: "https://www.wallpapertip.com/wmimgs/83-838172_programming-javascript.jpg",
    json: "https://wallpaperaccess.com/full/1555147.png",
    jsonc: "https://wallpaperaccess.com/full/1555147.png",
    html: "https://wallpaperaccess.com/full/4868336.jpg",
    css: "https://p4.wallpaperbetter.com/wallpaper/285/806/562/css-css3-wallpaper-preview.jpg" // insert this with your image
}
```

After configuring reload the JS again. (<kbd>Ctrl</kbd>+<kbd>P</kbd> -> Reload Custom CSS and JS, click Restart)

### Finally
Finally, have fun, there are many possibilities for theming, and if you find something nice or any bugs I'll be thankful if you can share them in the issues tab.

