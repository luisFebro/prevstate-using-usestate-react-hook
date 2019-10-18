const {useState} = React;

const Example = ({title}) => {
  const initialState = {
    firstKey: 'empty',
    secondKey: 'empty',
    thirdKey: 'not empty',
  }
  const [object, setObject] = useState(initialState);

  const withPrevState = () => {
    setObject((prevState) => ({
      ...prevState,
      secondKey: 'not empty',
    }));
  }

  return (
    <div>
      <h5>Updates Second key to 'not empty'</h5>
      <p>First key: {object.firstKey}</p>
      <p>Second key: {object.secondKey}</p>
      <p>Third key: {object.thirdKey}</p>
      <button onClick={withPrevState}>
        Update with prevState
      </button>
      <button onClick={() => {setObject({secondKey: 'not empty'})}}>
        Update without prevState
      </button>
      <button onClick={() => {setObject(initialState)}}>
        Reset
      </button>
    </div>
  );
};

// Render it
ReactDOM.render(
  <Example title={"prevState"}/>,
  document.getElementById("react")
);


