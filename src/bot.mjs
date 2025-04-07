import TeleBot from "telebot"

const bot = new TeleBot(process.env.TELEGRAM_BOT_TOKEN)

// bot.on("text", (msg) =>{ msg.reply.text(msg.chat.id)
//   console.log(msg.text)
//   }
// )
 const replyMarkup = bot.keyboard([
      ['/WebApp', '/inlineKeyboard'],
      ['/start', '/hello']
  ], {resize: true});

bot.on(['/start'], msg => {
  bot.sendSticker(msg.chat.id, 'https://tlgrm.eu/_/stickers/ea5/382/ea53826d-c192-376a-b766-e5abc535f1c9/1.webp')
  return bot.sendMessage(msg.chat.id, 'Keyboard example.', {replyMarkup});

});

// bot.on('/start',msg=>{bot.sendSticker(msg.chat.id, 'https://tlgrm.eu/_/stickers/ea5/382/ea53826d-c192-376a-b766-e5abc535f1c9/1.webp')})

  bot.on('/hello', (msg) => {
    return bot.sendMessage(msg.chat.id, `Hello, ${ msg.from.first_name }!`);
  });
  bot.on("/WebApp", (msg)=>{
   msg.url('url', {url: 'https://telegram.org'})
  console.log(msg.chat.url)})

export default bot
