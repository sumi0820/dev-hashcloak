import axios from 'axios';
import { Data, SendEmailApiResponse } from 'domains';

const postEmail = async (
  email: string,
  subject: string,
  content: string,
  formType: string,
): Promise<void | boolean> => {
  const encode = (data: Data) =>
    (Object.keys(data) as (keyof Data)[])
      .map(
        (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`,
      )
      .join('&');

  try {
    // Send auto reply message
    await axios.post<SendEmailApiResponse>('/api/sendmail', {
      email,
      subject,
      content,
    });

    // Store email in netlify
    await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': formType, email }),
    });

    return true;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);

    return false;
  }
};

export default postEmail;
