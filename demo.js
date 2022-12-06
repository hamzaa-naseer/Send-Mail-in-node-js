var nodemailer= require('nodemailer');
var transporter= nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port:587,
    secure:false,
    requireTLS:true,
     auth:{ 
      user: 'your email',
     pass:"here is my password"
  }
});
var mailOptions={
    from:'your email',
    to:'your email',
    subject:'Sending Email using Node.js',
    text:'That was easy!'
};
transporter.sendMail(mailOptions,function(error,info){
    if(error){
        console.log(error);
    }
    else{
        console.log('Email sent: '+info.response);
    }
}
);


  
   