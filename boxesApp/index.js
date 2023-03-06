const Box = (props) => {
  //  Write your code here.
  const { title, className } = props;
  return (
    <div className={`box ${className}`}>
      <p>{title}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="totalBoxes">
    <h1>Boxes</h1>
    <div className="boxCounter">
      <Box className="oneBox" title="Small" />
      <Box className="twoBox" title="Medium" />
      <Box className="threeBox" title="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
