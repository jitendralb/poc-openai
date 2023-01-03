const express = require("express");
const { Configuration, OpenAIApi } = require("openai");
const app = express();
var cors = require("cors");
port = 5050;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.listen(port, () => {
  console.log("Database is connect on port number" + port);
});

// const keyapi = "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";

// api
app.get("/", (req, res) => {
  let question = req.query.question;
  let apikeydata = req.query.apiKeyd;
  try {
    const configuration = new Configuration({
      apiKey: apikeydata,
    });
    const openai = new OpenAIApi(configuration);
    const completion = openai.createCompletion({
      model: "text-davinci-003",
      prompt: question,
      max_tokens: 1000,
    });

    completion.then((r) => {
      res.status(200).json({
        question: question,
        answer: r.data.choices[0].text,
      });
    });
  } catch (error) {
    console.log(error);
  }
});
//

// api image
app.get("/image", (req, res) => {
  let image = req.query.question;
  let apikeydata = req.query.apiKeyd;
  try {
    const configuration = new Configuration({
      apiKey: apikeydata,
    });
    const openai = new OpenAIApi(configuration);
    const response = openai.createImage({
      prompt: image,
      n: 1,
      size: "1024x1024",
    });
    response.then((r) => {
      res.status(200).json({
        imageurl: r.data,
      });
    });
  } catch (error) {
    console.log(error);
  }
});
//

// api english
app.get("/english", (req, res) => {
  let english = req.query.question;
  let apikeydata = req.query.apiKeyd;
  try {
    const configuration = new Configuration({
      apiKey: apikeydata,
    });
    const openai = new OpenAIApi(configuration);
    const completion = openai.createCompletion({
      model: "text-davinci-003",
      prompt: `Correct this to standard English:\n\n ${english}`,
      max_tokens: 1000,
    });

    completion.then((r) => {
      res.status(200).json({
        answer: r.data.choices[0].text,
      });
    });
  } catch (error) {
    console.log(error);
  }
});
