import express from 'express'
import mongoose from 'mongoose'
import { urlShort, getOriginalUrl } from "./Controllers/url.js";


const app = express();
const port = 3001;

app.use(express.urlencoded({extended:true}))


mongoose.connect('mongodb+srv://um8794907:uttam262903@ecommerce.8l5wf.mongodb.net/url')
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.error('Could not connect to MongoDB...'));

  app.get('/',(req,res)=>{
    res.render("server.ejs",{shortUrl:null})
  })

  // handle url submission
  app.post("/shorten", urlShort);

  // redirect to original url using short url
  app.get("/:shortCode", getOriginalUrl);


app.listen(port,()=>console.log(`Server is running on port ${port}`))

