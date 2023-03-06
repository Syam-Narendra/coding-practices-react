const Notification = (props) => {
  //  Write your code here.
  const { message, img, colour } = props;
  return (
    <div className="oneNotification" style={{ backgroundColor: colour }}>
      <img className="image" src={img} />
      <p className="messageHeading">{message}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="notificationBox">
    <h1 className="heading">Notifications</h1>
    <Notification
      message="Information Message"
      img="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      colour="#0b69ff"
    />

    <Notification
      message="Success Message"
      img="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      colour="#2dca73"
    />

    <Notification
      message="Warning Message"
      img="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      colour=" #ffb800"
    />

    <Notification
      message="Error Message"
      img="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      colour=" #ff0b37"
    />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
