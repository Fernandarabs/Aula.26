const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
    host: 'smtp-mail.outlook.com',
    port: 	587,
    secure: false,
    auth: {
        user: 'fernandaamorim@acad.ifma.edu.br',
        pass: '2126Nanda.',
    }
});

transport.sendMail({
    from: 'fernanda Amorim'
})