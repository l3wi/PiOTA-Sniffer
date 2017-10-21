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
    var thing = output
      .map(item => {
        return { maker: item[2], mac: item[1], time: item[0], rssi: item[4] }
      })
      .filter(
        (thing, index, self) =>
          self.findIndex(t => t.mac === thing.mac) === index
      )
    length = thing.length
    thing = thing.slice(count)
    count = length
    console.log(count)
    console.log(length)
    console.log(thing)
    if (thing === []) return
    var trytes = Mam.iota.utils.toTrytes(JSON.stringify(thing[1]))
    var message = Mam.create(state, trytes)
    state = message.state
    console.log(message.root)
    console.log(await Mam.decode(message.payload, null, message.root))
    await Mam.attach(message.payload, message.root)
  })
  setTimeout(() => sendData(), 10000)
}

sendData()
