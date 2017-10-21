var parse = require("csv-parse")
var fs = require("fs")
var PythonShell = require("python-shell")
// var Mam = require("./mam.client.js")
require("should")

var options = {
  mode: "text",
  pythonPath: "python",
  pythonOptions: ["-u -i wlan1mon -t unix -f -s -r -l"],
  scriptPath: "~/probemon/"
}
var pyshell = new PythonShell("probemon.py", options)

var output = ""

pyshell.on("message", function(message) {
  // received a message sent from the Python script (a simple "print" statement)
  console.log(message)
  output = output + message
})

// var state = Mam.init()

// var contents = fs.readFileSync(__dirname + "/WonderHowTo").toString()
// const sendData = () => {
//   parse(contents, { delimiter: "\t" }, async (err, output) => {
//     if (!output) return
//     var thing = output
//       .map(item => {
//         return { maker: item[2], mac: item[1], time: item[0], rssi: item[4] }
//       })
//       .filter(
//         (thing, index, self) =>
//           self.findIndex(t => t.mac === thing.mac) === index
//       )
//     console.log(thing)
//     var trytes = Mam.iota.utils.toTrytes(JSON.stringify(thing))
//     var message = Mam.create(state, trytes)
//     state = message.state
//     console.log(message.root)
//     console.log(await Mam.decode(message.payload, null, message.root))
//     output = ""
//     await Mam.attach(message.payload, message.root)
//   })
//   setTimeout(() => sendData(), 30000)
// }

// sendData()
