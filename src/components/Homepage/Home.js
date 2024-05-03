import React, {useState} from "react";
// import 'react-bootstrap';
import './Home.css'
import Title from "./Tittle";
import { FaRegUserCircle } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import axios from 'axios';
import RecordMessage from "./RecordMessage";
import {Nav} from "react-bootstrap"



const Home=() => {

    const [isLoading, setIsLoading] = useState(false);
const [messages, setMessages] = useState([]);

const createBlobUrl = (data) => {
  const blob = new Blob([data], { type: "audio/mpeg"});
  const url = window.URL.createObjectURL(blob);
  return url;
};

const handleStop = async (blobUrl) => {
  setIsLoading(true);

  // Append recording message to message
  const myMessage = { sender: "me", blobUrl };
  const messageArr = [...messages, myMessage];

  // Convert blobUrl to blob object
  fetch(blobUrl)
    .then((res) => res.blob())
    .then(async (blob) => {
      
      // Construct audio to send file
      const formData = new FormData();
      formData.append("file", blob, "myFile.wav");

      // Send form data to API endpoint
      await axios.post("http://localhost:8000/post-audio", formData, {
        headers: { "Content-Type": "audio/mpeg" },
        responseType: "arraybuffer",
      })
      .then((res) => {
        const blob = res.data;
        const audio = new Audio();
        audio.src = createBlobUrl(blob);

        // Append to audio
        const phatMessage = { sender: "phat", blobUrl: audio.src };
        messageArr.push(phatMessage);
        setMessages(messageArr);

        // Play audio
        setIsLoading(false);
        audio.play();
      })
      .catch((err) => {
        console.error(err.message);
        setIsLoading(false);
      })
    }
  );

  setIsLoading(false);
};
    


    return (
       <div className="home" >
            <div className="title">
                <Title />
            </div>
            <div className="container">
                <div className="left">
                    <button className="btn_new_chat">
                        New Chat +
                    </button>
                    <div className="history">
                        History
                    </div>
                    <Nav.Link href="/home" className="user" title="User">
                         <FaRegUserCircle/> 
                        <a>Span</a> 
                    </Nav.Link>
                    <Nav.Link  href="/home" className="setting">
                            <CiSettings />
                            Setting
                    </Nav.Link>
                    <Nav.Link  href="/login" className="btn_logout">
                            Logout
                    </Nav.Link>
                </div>
                <div className="right">
                    <div className="right_1">
                        {/* -------------------------------------- Conservation---------------------------------- */}
                        <div className="col"> 
                             {messages.map((audio, index) => { 
                             const additionalClass = audio.sender === "phat" ? "d-flex justify-content-end" : "d-flex justify-content-start"; 
                              return ( 
                                  <div key={index + audio.sender} className={` ${additionalClass}`}> 
                                     {/* Sender */}
                                     <div className='d-flex flex-column'>
                                     Hello
                                     </div>
                                 </div>
                                 );
                             })}
                         </div>
                    </div>
                    <div className="right_2 ">
                         
                         {/*--------------------------------- Recoder-------------------------------------------- */}
                         <div className='col-12 mt-4 pt-3  text-center'>
                             <div className='d-flex justify-content-center align-items-center'>
                                <div >
                                  
                                     <RecordMessage handleStop={handleStop} />
                                 </div>
                             </div>
                         </div>

                     </div>
                </div>
            </div>
            <div className="footer">
                <div class="text-center">© 2024 thanhphathoang</div>
            </div>
            {/* d-flex align-items-center justify-content-center position-relative */}
       </div>

  

    );
}

export default Home;





                    