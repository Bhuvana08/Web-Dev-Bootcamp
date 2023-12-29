import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));


const app = express();
const port = 3000;


app.get("/", (req, res) => {

  const d = new Date();
  const day = d.getDay();

  const type = "a weekday";
  const adv = "work hard!";
  
  if (day === 0 || day === 6){
    type = "the weekend";
    adv = "have fun!";
  }
  res.render(__dirname + "/views/index.ejs",{
    daytype:type,
    advice:adv,
   });
});

app.listen(port,(req,res)=> {
  console.log(`Server is running on port ${port}.`);
})