import React, { useRef } from 'react';
import WebNotification from 'react-web-notifications';

const Notification = ({ name, message, type }) => {
  // Create a ref for the WebNotification component
  // const notificationRef = useRef();

  // Function to trigger the web notification
  // const triggerNotification = () => {
  //   if (notificationRef.current) {
  //     notificationRef.current.showNotification();
  //   }
  // };

  return (
    <div className="new-assignment-submission">
      <strong>{name}</strong> {type=='submit'?'submitted a new assignment':'sent you a message'}
      <p>{message}</p>
      {/* <button onClick={triggerNotification}>Show Notification</button> */}
      {/* <WebNotification
         ref={notificationRef}
         title="Hello, World!" // the title prop is required
         icon="path/to/image.jpg"
         body="This is a web notification"
         timeout={9000}
         onClick={() => window.open('http://www.google.com/', '_blank')}
      /> */}
    </div>
  );
};

export default Notification;
