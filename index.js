var parse = require("csv-parse")
var fs = require("fs")
var Mam = require("./mam.client.js")
var state = Mam.init()

let count = 0
let length

const read = () => {
  try {
    var dump = fs.readFileSync(__dirname + "/dump")
    return dump.toString()
  } catch (e) {
    console.log("No data")
  }
}

const sendData = () => {
  parse(read(), { delimiter: "\t" }, async (err, output) => {
    if (!output) return

    // Slicing
    length = output.length
    output = output.slice(count)
    count = length
    if (!output[0]) return
    // Re format and remove duplicates
    var thing = output[0]
      .map(item => {
        return { maker: item[2], mac: item[1], time: item[0], rssi: item[4] }
      })
      .filter(
        (thing, index, self) =>
          self.findIndex(t => t.mac === thing.mac) === index
      )
    console.log(thing)
    // Construc da msg
    var trytes = Mam.iota.utils.toTrytes(JSON.stringify(thing))
    var message = Mam.create(state, trytes)
    state = message.state
    console.log(message.root)
    console.log(await Mam.decode(message.payload, null, message.root))
    await Mam.attach(message.payload, message.root)
  })
  setTimeout(() => sendData(), 10000)
}

sendData()
