const express = require("express");
const bodyParser = require("body-parser");
const crypto = require("crypto");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");

const app = express();
const port = 3000;
const cors = require("cors");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const jwt = require("jsonwebtoken");

mongoose
  .connect("mongodb+srv://mutumalaw:Mutu-75ma@cluster0.6rbpqdk.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDb", err);
  });

app.listen(port, () => {
  console.log("Server is running on port 3000");
});

const User = require("./models/User");
const Order = require("./models/order");

// function to send verification to the user
const sendVerificationEmail = async (email, verificationToken) => {
  // create a  modemailer transport

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "mutumalaw2016@gmail.com",
      pass: "alngetqqmhojksyp",
    },
  });
  // compose the mail message
  constmailOptions = {
    from: "Niddlle LLC",
    to: email,
    subject: "Email Verification",
    text: "please click the following link to verify your email: http://192.168.100.6:3000/verify/${verificationToken}",
  };
  //send the email
  try {
    await transporter.sendMail(mailOptions)
  } catch (error) {
    console.log("Error sending verification email", error);
  }
};

// endpoint to register in the app
app.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // check if email is already registered
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }

    //create a new user
    const newUser = new User({ name, email, password });

    //generate and store the verification token

    newUser.verificationToken = crypto.randomBytes(20).toString("hex");

    //save the user to the database

    await newUser.save();

    sendVerificationEmail(newUser.email, newUser.verificationToken);
  } catch (error) {
    console.log("error registering user", error);
    res.status(500).json({ message: "Registration failed" });
  }
});


// endpoitn to verify Token

app.get("/verify/:token",async(req,res) => {
    try {
        const token=req.params.token;

        //find the user with the given token
        const user = await User.findOne({verificationToken: token});
        if(!user){
            return res.status(404).json({message:"Invalid verification Token"});
        }

        //Mark the user as verified
        user.verified = true;
        user.verificationToken = undefined;

        await user.save();

        res.status(200).json({message:"Email verified successfully"})
        
    } catch (error) {
        res.status(500).json({message:"Email Verification Failed"})
        
    }
})