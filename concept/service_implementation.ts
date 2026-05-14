import { sendRSVPEmails } from './services/email.service';

const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);

  const data = {
    name: formData.get('name'),
    phone: formData.get('phone'),
    email: formData.get('email'),
    attendance: formData.get('attendance'),
    message: formData.get('message'),
  };

  const result = await sendRSVPEmails(data);

  if (result.success) {
    alert('RSVP confirmation sent successfully.');
    e.target.reset();
  } else {
    alert('Error sending RSVP.');
  }
};