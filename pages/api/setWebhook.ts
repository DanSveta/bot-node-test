import type { NextApiRequest, NextApiResponse } from 'next';
import TelegramBot from 'node-telegram-bot-api';

// const token = process.env.TELEGRAM_BOT_TOKEN!;
const token: string = '7210157855:AAGcyzGgMcfwibZS7W73PPqMkx5lSS3DJoc';

const bot = new TelegramBot(token);

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const url = `https://bot-node-test-phi.vercel.app/api/telegram`;

  try {
    await bot.setWebHook(url);
    res.status(200).send('Webhook set successfully');
  } catch (error) {
    console.error('Error setting webhook:', error);
    res.status(500).send('Error setting webhook');
  }
};

export default handler;
