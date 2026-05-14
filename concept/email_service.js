import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs.config';

export const sendRSVPEmails = async ({
  name,
  phone,
  email,
  attendance,
  message,
}) => {
  try {
    const templateParams = {
      guest_name: name,
      guest_email: email,
      guest_phone: phone,
      attendance,
      guest_message: message,

      wedding_date: 'May 16, 2027',
      wedding_hour: '5:00 PM',

      wedding_location:
        'Casa de Campo, La Romana, Dominican Republic',

      hosts: 'Jonathan & Emily',
    };

    await Promise.all([
      // CORREO HACIA TI
      emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ADMIN,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      ),

      // CORREO HACIA INVITADO
      emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_GUEST,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      ),
    ]);

    return {
      success: true,
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      error,
    };
  }
};