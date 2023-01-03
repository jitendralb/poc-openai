import axios from "axios";
import { useState } from "react";

function App() {
  const [question, setQuestion] = useState("");
  const [english, setEnglish] = useState("");
  const [image, setImage] = useState("");

  const submitquestion = (e) => {
    e.preventDefault();
    axios({
      method: "get",
      url: `http://localhost:5050/?question=${question}`,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        document.getElementById("setQuestion").innerHTML = response.data.answer;
      })
      .catch(function (response) {
        console.log(response);
        // document.getElementById("error").innerHTML = response.data.message;
      });
  };
  const submitenglish = (e) => {
    e.preventDefault();
    axios({
      method: "get",
      url: `http://localhost:5050/english/?question=${english}`,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        document.getElementById("setEnglish").innerHTML = response.data.answer;
      })
      .catch(function (response) {
        console.log(response);
        // document.getElementById("error").innerHTML = response.data.message;
      });
  };
  const submitimage = (e) => {
    e.preventDefault();
    axios({
      method: "get",
      url: `http://localhost:5050/image/?question=${image}`,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(function (response) {
        console.log(response.data.imageurl.data[0].url);
        document.getElementById("setImage").href =
          response.data.imageurl.data[0].url;
        document.getElementById("setImage").innerHTML = `${image} image`;
      })
      .catch(function (response) {
        console.log(response);
        // document.getElementById("error").innerHTML = response.data.message;
      });
  };
  // console.log(question.toString());
  return (
    <>
      <div className="question">
        <form onSubmit={submitquestion}>
          <input
            value={question}
            onChange={(event) => setQuestion(event.target.value)}
            type="text"
          />
          <button type="submit">Submit</button>
        </form>
        <span id="setQuestion"></span>
      </div>
      <br />
      {/*  */}
      <div className="english">
        <form onSubmit={submitenglish}>
          <input
            value={english}
            onChange={(event) => setEnglish(event.target.value)}
            type="text"
          />
          <button type="submit">Submit</button>
        </form>
        <span id="setEnglish"></span>
      </div>
      <br />
      {/*  */}
      <div className="question">
        <form onSubmit={submitimage}>
          <input
            value={image}
            onChange={(event) => setImage(event.target.value)}
            type="text"
          />
          <button type="submit">Submit image</button>
        </form>
        <a target="_blank" href="" id="setImage"></a>
      </div>
      <br />
    </>
  );
}

export default App;
