import axios from "axios";
import nodemailer from "nodemailer";
import { Vonage } from "@vonage/server-sdk";

//
const vonage = new Vonage({
  apiKey: "2cecf553",
  apiSecret: "1Z2Q1jiNN0CjwCg1"
})

const from = "Vonage APIs"
const to = "8801518997191"
const text = 'A text message sent using the Vonage SMS API'

async function sendSMS(to, from, text) {
    await vonage.sms.send({to, from, text})
        .then(resp => { console.log('Message sent successfully'); console.log(resp); })
        .catch(err => { console.log('There was an error sending the messages.'); console.error(err); });
}



export const getAllUser = (req, res) =>{
    res.status(200).send("hello world")
}

export const registerUser = async (req, res) =>{
    //create mail transport 
    const transport = nodemailer.createTransport({
        host : process.env.MAIL_HOST,
        port : process.env.MAIL_PORT,
        auth :{
            user : process.env.MAIL_ADDRESS,
            pass : process.env.MAIL_PASS,
        }
    });

   await transport.sendMail({
        from : `MERN STACK Group <${process.env.MAIL_ADDRESS}>`,
        sub : 'MERN STACK GROUP',
        to : req.body.email,
        text : `Hello ${req.body.name}, You are ${req.body.age} Years old you are ${req.body.skill}`,

        html : `
        
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Template</title>

    <style>

       .container{
        width: 600px;
        height: 500px;
        margin: auto;
        margin-top: 100px;
       }

       .email-body{
        width: 90%;
        text-align: center;
        
       }

       .email-logo img{
        width: 200px;
        height: 150px;
       }

       .email-body P{
        color:white;
        background-color: rgb(0, 37, 248);
        font-size: 30px;
        align-items: center;
        
       }

       h5{
        font-size: 20px;
        align-items: left;
       }

       .email-body a{
        font-size: 30px;
        color: rgb(255, 123, 0);
        margin-right: 10px;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
       }
      
    </style>
</head>
<body>
    
<div class="container">
    <div class="email-body">

       

        <div class="email-logo">
            <img src="https://miro.medium.com/v2/resize:fit:678/0*kxPYwfJmkXZ3iCWy.png" alt="">
        </div>

        <h1>Hello, ${req.body.name}</h1>
        <h2>You are ${req.body.age} Years old</h2>
        <h3>Skill : ${req.body.skill}</h3>



        <p>Your Are Wellcome by MEREN STACK Developer Community Group</p>

        <h5>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem corrupti atque ipsam corporis, aliquid laudantium! Labore necessitatibus eligendi quas recusandae?</h5>

        <hr>

        <a href="#"><i class="fa-brands fa-facebook"></i></a>
        <a href="#"><i class="fa-brands fa-instagram"></i></a>
        <a href="#"><i class="fa-brands fa-linkedin"></i></a>
     
    </div>
</div>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
</body>
</html>
        
        `
        
    });

    await sendSMS(
    "8801518997191", 
    "Vonage APIs",
     `Hello ${req.body.name}, You are ${req.body.age} years old and You are ${req.body.skill} DEVELOPER`);

    axios.get(
          `http://bulksmsbd.net/api/smsapi?api_key=3a5g6eeIJ1ElcqKbyuFe&type=text&number= ${req.body.cell}&senderid=8809617612994&message= HI ${req.body.name}, You are ${req.body.age} Years old and you are a ${req.body.skill} DEVELOPER`
    )

    res.status(200).json(req.body);
} 