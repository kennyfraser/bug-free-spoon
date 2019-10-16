const fs = require('fs')

const version = process.argv.splice(2)[0]

if(version){
  fs.writeFileSync('./version.json', `${JSON.stringify({version})}`)
  fs.writeFileSync('./README.md', version)
} else {
  console.log(JSON.parse(fs.readFileSync('./version.json').toString()).version)
}