import twilio from 'twilio';

const client = twilio(
  process.env.TWILIO_SID,
  process.env.TWILIO_AUTH_TOKEN
);

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');

  const { name, phone } = req.body;

  if (!name || !phone) {
    return res.status(400).json({ error: 'Missing name or phone' });
  }

  try {
    await client.messages.create({
      body: `📞 New lead:\nName: ${name}\nPhone: ${phone}`,
      from: process.env.TWILIO_PHONE,
      to: process.env.MY_PHONE_NUMBER
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('SMS failed:', err);
    return res.status(500).json({ error: 'Failed to send SMS' });
  }
}
