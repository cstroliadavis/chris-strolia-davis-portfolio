export async function contactUs({ name, email, message}) {
  const letter = {
    from: `${name} <${email}>`,
    to: 'contact@ourserver.com',
    subject: `[PORTFOLIO CONTACT FORM SUBMISSION]: ${name}`,
    text: message,
  }

  console.log('We would be sending this message:', letter);
}
