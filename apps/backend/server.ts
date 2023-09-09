import express from "express";
import cors from "cors";


const app = express();
const port = 3001;

const corsOptions = {
  origin: ["http://localhost:3001"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(express.json());
app.use(cors());

const assets:any=[]
app.get("/getAssets",(req,res)=>{
  try{
    console.log(res.json(assets))
  }catch(err){
    console.log(err)
  }
})
app.post("/addAssets", (req, res) => {
  const req_data = req.body;
  console.log("add_asset_req:");
  console.log(req_data);
  try {
    assets.push(req_data)
    res.json({ message: "Data received successfully", data: req_data });
  } catch (err) {
    console.log(err);
  }
  res.send("Hello, World!");
});

const server: any = app.listen(port, function () {
  const host: any = "localhost";
  const port: any = server.address().port;

  console.log("Listen in: http://%s:%s", host, port);
});
