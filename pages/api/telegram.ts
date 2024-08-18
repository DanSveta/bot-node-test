import type { NextApiRequest, NextApiResponse } from 'next';
import TelegramBot from 'node-telegram-bot-api';

// Replace with your Telegram bot token
 const token = process.env.TELEGRAM_BOT_TOKEN!;

const bot = new TelegramBot(token);

// This handler will be invoked whenever Telegram sends a message to your bot
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { message } = req.body;

    if (message) {
      const chatId = message.chat.id;
      const text = message.text?.toLowerCase();

      // Respond to the message
      if (text === 'hi') {
        await bot.sendMessage(chatId, 'Hello from Next.js!');
      } else {
        await bot.sendMessage(chatId, `You said: ${text}`);
      }
    }

    res.status(200).send('Message processed');
  } else {
    res.status(405).send('Method not allowed');
  }
};

export default handler;
