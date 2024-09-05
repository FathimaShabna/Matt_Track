import admin from '../../../lib/firebaseAdmin';
import nodemailer from 'nodemailer';

export default async function handler(req:any, res:any) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  try {
    const customToken = await admin.auth().createCustomToken(email);
    const inviteLink = `${process.env.NEXT_PUBLIC_APP_URL}/signup?token=${customToken}`;
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.GMAIL_USER, 
        pass: process.env.GMAIL_PASS 
      }
    });

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: email,
      subject: 'You are invited to join our website',
      text: `Click the following link to sign up: ${inviteLink}`
    });

    res.status(200).json({ message: 'Invitation sent successfully' });
  } catch (error) {
    console.error('Error sending invite:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
