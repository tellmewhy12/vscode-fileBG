### Custom Background Images for VSCode

This extension runs on the vscode custom-css extension.

https://github.com/be5invis/vscode-custom-css

### Installation

1. Download and install the Custom CSS and JS Loader extension from the official link: https://marketplace.visualstudio.com/items?itemName=be5invis.vscode-custom-css
2. Download the latest FileBG .js file [here](https://github.com/mangoepic/vscode-fileBG/releases) from the releases page
3. Add this code to your settings.json (<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> -> Open Settings (JSON))
```javascript
"vscode_custom_css.imports": [
        "file:///D:/path/to/FileBG.js",
],
```
4. Don't forget to insert your own path to the FileBG.js file on your computer, best in your home folder (for Windows e.g. ´C:\Users\<name>\Documents...´) so Custom CSS/JS loader can access it
5. Run VSCode with Admin privileges
6. <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> -> Reload Custom CSS and JS, click Restart

**Common Errors:**
 - There will be a notice that vscode's files have been modified by the CSS loader, you can disable it with the cog and "Don't show again".
 - Opening FileBG.js might give a windows warning so try to do it per hand first
 - Save FileBG.js somewhere in your home folder (for Windows e.g. C:\Users\<name>\Documents...), if you get an error that it can't be loaded

It should work now! If it doesn't try to bugfix the Custom CSS JS loader extension.

Custom background images for languages in vscode. Quick Demonstration:

https://user-images.githubusercontent.com/71931749/133819638-9b65fea0-573f-4861-ad69-fe88564c916a.mp4


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

For further information on different filetypes look into the Wiki page
