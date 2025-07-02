import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

export async function enviarEmail({ to, subject, html }) {
  try {
    const response = await resend.emails.send({
      from: 'HemoWeb <contato@hemoweb.com.br>', // dominio pra testes 
      to,
      subject,
      html,
    });

    console.log('Email enviado:', response);
    return response;
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    throw error;
  }
}
