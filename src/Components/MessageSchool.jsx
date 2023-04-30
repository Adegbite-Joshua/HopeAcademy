import React from 'react'

const MessageSchool = () => {
    const openForm =()=> {
        document.getElementById("myForm1").style.display = "block";
    }
    
    const closeForm =()=> {
        document.getElementById("myForm1").style.display = "none";
    }
  return (
    <>
        <button className="open-button1 p-2 rounded-full" onClick={openForm}>Message Us</button>
        <div className="chat-popup1" id="myForm1">
        <form action="/action_page.php" className="form-container1">
            <h1>Chat</h1>
            <label for="msg"><b>Message</b></label>
            <textarea placeholder="Type message.." name="msg" required></textarea>
            <button type="submit" className="btn1"><i className='fas fa-send'></i></button>
            <button type="button" className="btn1 cancel1 btn rounded-pill p-2" onClick={closeForm}>Close</button>
        </form>
        </div>
    </>
  )
}

export default MessageSchool


