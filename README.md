### Custom Background Images for VSCode!

Custom background images for languages in vscode. Quick Demonstration:
https://user-images.githubusercontent.com/71931749/133819638-9b65fea0-573f-4861-ad69-fe88564c916a.mp4

This extension runs on the vscode custom-css extension.
https://github.com/be5invis/vscode-custom-css

### Installation


1. Download and install the VSCode Custom-CSS-and-JS loader extension from the official link: https://marketplace.visualstudio.com/items?itemName=be5invis.vscode-custom-css
2. Download FileBG [here](https://github.com/mangoepic/vscode-FileBG/releases/download/Release/FileBG.js) or from the releases page
3. Add this code to your settings.json (<kbd>Ctrl</kbd>+<kbd>P</kbd> -> Open Settings (JSON))
```javascript
"vscode_custom_css.imports": [
        "file:///D:/path/to/FileBG.js",
],
```
4. Don't forget to insert your own path to the FileBG.js file on your computer
5. Run VSCode with Admin Priviliges
6. <kbd>Ctrl</kbd>+<kbd>P</kbd> -> Reload Custom CSS and JS, click Restart

It should work now!

### Configuration

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

When switching tab to the file you like add there should appear a message "Switched to tab with mode xxx"
The "xxx" is what your language is named in vscode!

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

### Finally
Finally, have fun! The possibilities for theming are endless and your imagination are the only borders!
If you have a nice combination you can gladly showcase it here!

