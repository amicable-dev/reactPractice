import './App.css';
import NewPage from './NewPage.jsx';
import Button from './Button.jsx';
import States from './States.jsx';
import Toggle from './Toggle.jsx';
import Props from './Props.jsx';
import AdvanceProps from './AdvancrProps.jsx'
function App() {
  function addiation(a, b) {
    return a + b;
  }
  const imgPath =
    'https://tse2.mm.bing.net/th/id/OIP.VrVkctR-3BlKTanoDJsQhAHaD4?r=0&rs=1&pid=ImgDetMain&o=7&rm=3';
  const idx = 3;
  const userArray = [1, 2, 3, 4, 5, 6];
  const newObj = {
    name: 'Raghav',
    class: '11th',
  };
  return (
    <>
      <h1>{addiation(40, 60)}</h1>
      <h1>{newObj.name}</h1>
      <h1>{userArray[idx]}</h1>
      <img src={imgPath} />
      <br />
      <input type="text" value={newObj.name} />
      <br />
      <br />
      <NewPage />
      <br />
      <Button />
      <States />
      <Toggle/>
      <hr />
      <Props />
      <br />
      <AdvanceProps color='pink' potato='Raghav'/>
      <AdvanceProps h1color='orange'>
        <h2 style={{color:'green',font:'message-box'}}>This is from the advance props in the main app component , used children fun to work with it and make it possible</h2>
      </AdvanceProps>
      <AdvanceProps />
    </>
  );
}

export default App;
