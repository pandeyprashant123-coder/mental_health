import React, { useEffect, useState } from "react";
import "./chats.css";
import profile from "./profile.svg";
import messageSender from "./message send arrow.svg";
import Pusher from "pusher-js";
import axios from "../../api"

const Chats = () => {
  const [messages, setmessages] = useState([]);
  const [inputMessage,setInputMessage] = useState('');
  useEffect(()=>{
    axios.get("messages/sync").then((response)=>{
      setmessages(response.data)
    })
  },[])
  
  useEffect(() => {
    const pusher = new Pusher("1bfa9688581b43fd6376", {
      cluster: "ap2",
    });

    var channel = pusher.subscribe("messages");
    channel.bind("inserted", (newMessages) => {
      setmessages([...messages,newMessages])
    });

    return ()=>{
      channel.unbind_all()
      channel.unsubscribe()
    }
  }, [messages]);
  // console.log(messages)
  const sendMessage=async(e)=>{
    e.preventDefault();
    await axios.post('/messages/new',{
      name:'prashnta',
      message:inputMessage,
      received:false,
    })
    setInputMessage('');
  }

  return (
    <div>
      <div className="chatpanal">
        <div className="chatbox">
          {
            messages.map((message)=>(
              <div className={`messages ${!message.received &&'messageSender'}`}>
                {/* <h1>{message.name}</h1> */}
                <img src={profile} alt="" />
                <p>{message.message}</p>
                {/* <p>{message.timestamp}</p> */}
              </div>
            ))
          }
          {/* <div className="messages ">
            <p>Hello</p> <img src={profile} alt="" />{" "}
          </div> */}
        </div>

        <form action="" className="sendchat">
          <input value={inputMessage} onChange={e=>setInputMessage(e.target.value)} type="text" placeholder="Enter chat...." />
          <button className="btn" type="submit" onClick={sendMessage}><img src={messageSender} alt="" /></button>
        </form>
      </div>
    </div>
  );
};

export default Chats;
