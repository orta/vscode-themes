# vscode-themes

<a href='http://orta.io/vscode-themes/'><img src='screenshots/screenshot.png></a>

## Setup

```sh
git clone https://github.com/orta/vscode-themes.git
cd vscode-themes
yarn install
yarn setup
```

This will setup and run the [vscode-themes-lister](https://github.com/orta/vscode-theme-lister) - expect it to take ~2-3 hours. Make sure you've got VS Code Insiders set up etc.

Or if you have it set up somewhere else, `ln -s ../vscode-theme-lister generator`.

Now you will reliably have a folders `generator/data/*` which contains all the essential metadata and screenshots.

### Getting the website up & running

Run `yarn app` to generate the html inside a `dist` folder.

### Deploy to gh-pages

Run `yarn deploy`.
