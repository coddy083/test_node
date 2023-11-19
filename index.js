const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

const services = [
  {
    id: 1,
    category: "1000",
    categoryIcon:
      "https://firebasestorage.googleapis.com/v0/b/viralbus-d4d6b.appspot.com/o/free-icon-instagram-717392.png?alt=media&token=22d00ad7-903e-42ff-b7b6-ccd26ad5cc71&_gl=1*1jjdosl*_ga*MTA0MDE1OTcwNS4xNjkyNTk1ODYx*_ga_CW55HF8NVT*MTY5OTI2MjI3OC4zNS4xLjE2OTkyNjYyNDguMTMuMC4w",
    categoryName: "Instagram",
    exLink: "https://www.instagram.com/",
    maxQuantity: 100000,
    minQuantity: 100,
    option: false,
    optionName: "",
    popularity: 0,
    price: 1,
    provider: "ex",
    providerName: "Example",
    serviceId: 3676,
    serviceName: "Instagram Followers",
  },
  {
    id: 2,
    category: "1000",
    categoryIcon:
      "https://firebasestorage.googleapis.com/v0/b/viralbus-d4d6b.appspot.com/o/free-icon-instagram-717392.png?alt=media&token=22d00ad7-903e-42ff-b7b6-ccd26ad5cc71&_gl=1*1jjdosl*_ga*MTA0MDE1OTcwNS4xNjkyNTk1ODYx*_ga_CW55HF8NVT*MTY5OTI2MjI3OC4zNS4xLjE2OTkyNjYyNDguMTMuMC4w",
    categoryName: "Instagram",
    exLink: "https://www.instagram.com/",
    maxQuantity: 100000,
    minQuantity: 100,
    option: false,
    optionName: "",
    popularity: 0,
    price: 1,
    provider: "ex",
    providerName: "Example",
    serviceId: 3676,
    serviceName: "Instagram Followers",
  },
  {
    id: 3,
    category: "1000",
    categoryIcon:
      "https://firebasestorage.googleapis.com/v0/b/viralbus-d4d6b.appspot.com/o/free-icon-instagram-717392.png?alt=media&token=22d00ad7-903e-42ff-b7b6-ccd26ad5cc71&_gl=1*1jjdosl*_ga*MTA0MDE1OTcwNS4xNjkyNTk1ODYx*_ga_CW55HF8NVT*MTY5OTI2MjI3OC4zNS4xLjE2OTkyNjYyNDguMTMuMC4w",
    categoryName: "Instagram",
    exLink: "https://www.instagram.com/",
    maxQuantity: 100000,
    minQuantity: 100,
    option: false,
    optionName: "",
    popularity: 0,
    price: 1,
    provider: "ex",
    providerName: "Example",
    serviceId: 3676,
    serviceName: "Instagram Followers",
  },
];

app.get("/", (req, res) => {
  res.send(services);
});

app.listen(8080, () => {
  console.log("Server is running on port 3000");
});
