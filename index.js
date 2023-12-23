const { Client } = require('whatsapp-web.js');
const client = new Client();

client.on('qr', (qr) => {
  console.log('Escanear este código QR con WhatsApp:');
  console.log(qr);
});

client.on('ready', () => {
  console.log('¡El bot está listo para responder mensajes!');
});

client.on('message', async (message) => {
  if (message.body === 'Hola') {
    await message.reply('¡Hola! Soy un bot de WhatsApp.');
  }
});

client.initialize();
