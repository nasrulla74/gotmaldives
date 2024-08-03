import type { NextApiRequest, NextApiResponse } from 'next';
import { EmailTemplate } from '../../components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface EmailTemplateProps {
  resort_name: string;
  room_type: string;
  user_name: string;
  user_email: string;
  meal_plan: string;
  transfer: string;
  message: string;
  arrival_date: string;
  departure_date: string;
 
  
}


export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { resort_name, room_type, user_name, user_email, meal_plan, transfer, message, arrival_date, departure_date  } = req.body;
  const { data, error } = await resend.emails.send({
    from: 'Acme <gotmaldives@noreply.appeul.com>',
    to: ['nasrullaw74@gmail.com'],
    subject: 'Booking Request from website!',
    react: EmailTemplate({ resort_name, room_type, user_name, user_email, meal_plan, transfer, message, arrival_date, departure_date }),
  });

  if (error) {
    return res.status(400).json(error);
  } 

  res.status(200).json(data);
};
