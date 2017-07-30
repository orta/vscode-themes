// @ts-check

// Expects to be called like: node scripts/setup.js

const exec = cmd => {
  console.log("> " + cmd)
  shell.exec(cmd)
}

var shell = require("shelljs")
exec("git clone https://github.com/orta/vscode-theme-lister.git generator")

process.chdir("generator")
exec("yarn install")
exec("yarn download_json")
exec("yarn all")
exec("yarn shrink")
