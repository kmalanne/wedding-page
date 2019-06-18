import * as emailjs from 'emailjs-com';

export const sendEmail = async (message: string): Promise<boolean> => {
  try {
    await emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID as string,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID as string,
      { message },
      process.env.REACT_APP_EMAILJS_USER_ID
    );

    return true;
  } catch (error) {
    return false;
  }
};
