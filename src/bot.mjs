import TeleBot from "telebot"

const bot = new TeleBot(process.env.TELEGRAM_BOT_TOKEN)

bot.on("text", msg => msg.reply.text(msg.text))

bot.on('message',async (msg) => {
    console.log(msg.from.username)
    const text = msg.text
  const chatId = msg.chat.id;})

  bot.on('/hello', (msg) => {
    return bot.sendMessage(msg.from.id, `Hello, ${ msg.from.first_name }!`);
  });

export default bot
