const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'prueba@gmail.com',
        pass: 'PASSWORD'
    }
});
const mailOptions = {
    from: 'prueba@gmail.com',
    to: 'example@gmail.com',
    subject: 'Asunto del correo',
    text: 'Contenido del correo'
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log('Error al enviar el correo:', error);
    } else {
        console.log('Correo enviado con éxito:', info.response);
    }
});
