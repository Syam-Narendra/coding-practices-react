const Button = (props) => {
  //  Write your code here.
  const { buttonName } = props;
  return <button className="button">{buttonName}</button>;
};

const element = (
  <div className="background">
    <div className="heading">
      <h1>Social Buttons</h1>
      <div className="threeButt">
      <Button buttonName="Like" />
      <Button buttonName="Comment" />
      <Button buttonName="Share" />
    </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
