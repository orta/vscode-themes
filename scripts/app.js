// @ts-check

// Expects to be called like: node scripts/setup.js
const path = require("path")
const fs = require("fs")
const glob = require("glob")
const shell = require("shelljs")

const themeFolders = fs.readdirSync("generator/data").filter(f => !f.startsWith("."))

const themeMetadatas = themeFolders.map(theme =>{
  const folder = "generator/data/" + theme
  const images = glob.sync(folder + "/*.png")

  // Move them into the images folder
  images.forEach(image => {
    if(!fs.existsSync("dist/images/"+image)) {
      shell.cp(image, "dist/images/")
    }
  })

  var extension = JSON.parse(fs.readFileSync(folder + "/extension.json", "utf8"))
  var extensionID = extension.publisher.publisherName + "." + extension.extensionName

  return {
    name: theme,
    id: extensionID,
    images: glob.sync(folder + "/*.png").map(f => f.replace(folder, ""))
  }
})

const head = `
<html>
<head>
  <title>VS Code themes</title>
</head>
`
const footer = `</html>`

const body = (themes) => `
<body>
${themes.map(f => themeToHTML(f)).join("")}
</body>
`

const themeToHTML = (theme) => `
<a href='https://marketplace.visualstudio.com/items?itemName=${theme.id}'>
<h3>${theme.name}</h3>
</a>
${theme.images.map(f => imagePathToImg(f)).join("")}`

const imagePathToImg = (image) => `
<img src='images/${image}' width='100%'>
`

const html = head + body(themeMetadatas) + footer
fs.writeFileSync("dist/index.html", html)
