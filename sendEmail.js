// sendEmail.js
const mailjet = require('node-mailjet').connect(
    'VOTRE_CLE_API_PUBLIQUE',
    'VOTRE_CLE_API_PRIvee'
  );
  
  export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { to, subject, text } = req.body;
  
      const request = mailjet.post('send', { version: 'v3.1' }).request({
        Messages: [
          {
            From: {
              Email: 'votre-email@example.com',
              Name: 'Votre Nom',
            },
            To: [
              {
                Email: to,
              },
            ],
            Subject: subject,
            TextPart: text,
          },
        ],
      });
  
      request
        .then((result) => {
          res.status(200).json({ success: true, data: result.body });
        })
        .catch((err) => {
          res.status(500).json({ error: err.toString() });
        });
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  