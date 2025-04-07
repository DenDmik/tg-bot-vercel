import TeleBot from "telebot"

const bot = new TeleBot(process.env.TELEGRAM_BOT_TOKEN)

// bot.on("text", (msg) =>{ msg.reply.text(msg.chat.id)
//   console.log(msg.text)
//   }
// )
 const replyMarkup = bot.keyboard([
      [ '/inlineKeyboard'],
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
 
  bot.on('/inlineKeyboard', msg => {

    let replyMarkup = bot.inlineKeyboard([
        [
            bot.inlineButton('callback', {callback: 'this_is_data'}),
            bot.inlineButton('inline', {inline: 'some query'})
        ], [
            bot.inlineButton('url', {url: 'https://next-deploy-dun.vercel.app/'})
        ]
    ]);

    return bot.sendMessage(msg.from.id, 'Inline keyboard example.', {replyMarkup});

});

export default bot
