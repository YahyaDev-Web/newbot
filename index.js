const mineflayer = require('mineflayer')
const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('Bot is alive!')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

function createBot () {
  const bot = mineflayer.createBot({
    host: 'LifeMC-V2uq.aternos.me',
    username: 'yahya',
    port: 51755,
    version: '1.16.5',
  })

  bot.on('spawn', () => {
    bot.chat('/register aagop04')
  })

  bot.on("move", function() {
    bot.setControlState("jump", true)
    setTimeout(() => bot.setControlState("jump", false), 1000)

    setTimeout(() => {
      bot.setControlState("forward", true)
      setTimeout(() => bot.setControlState("forward", false), 500)
    }, 1000)

    setTimeout(() => {
      bot.setControlState("back", true)
      setTimeout(() => bot.setControlState("back", false), 500)
    }, 2000)

    setTimeout(() => {
      bot.setControlState("right", true)
      setTimeout(() => bot.setControlState("right", false), 2000)
    }, 500)

    setTimeout(() => {
      bot.setControlState("left", true)
      setTimeout(() => bot.setControlState("left", false), 2000)
    }, 500)
  })

  bot.on('kicked', console.log)
  bot.on('error', console.log)
  bot.on('end', createBot)
}

createBot()
