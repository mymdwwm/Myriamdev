// api/sendEmail.js
export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { name, email, message } = req.body;
  
      const mailjet = require('node-mailjet').apiConnect(
        process.env.MJ_APIKEY_PUBLIC,
        process.env.MJ_APIKEY_PRIVATE
      );
  
      const request = mailjet.post('send', { version: 'v3.1' }).request({
        Messages: [
          {
            From: {
              Email: email, // Utiliser l'email de l'utilisateur comme expéditeur
              Name: name,
            },
            To: [
              {
                Email: 'myriam.malki@hotmailfr', // Votre email comme destinataire
                Name: 'Myriam',
              },
            ],
            Subject: `Nouveau message de ${name}`,
            TextPart: message,
          },
        ],
      });
  
      try {
        await request;
        res.status(200).json({ message: 'Email envoyé avec succès' });
      } catch (error) {
        res.status(500).json({ error: 'Erreur lors de l\'envoi de l\'email' });
      }
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Méthode ${req.method} non autorisée`);
    }
  }