const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.EMAILUSER,
        pass: process.env.EMAILPASSWORD
    }
})

transporter.verify((error, success) => {
    if (error) {
        console.log(error);
    } else {
        console.log('All works fine, congratz!');
    }
});

module.exports = transporter