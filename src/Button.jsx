function click(name) {
  alert(name);
}
const Button = () => {
  // function click(name) {
  //   alert(name);
  // }
  function newBtn(name) {
    alert(name);
  }
  return (
    <div>
      <h2>Game for amit</h2>
      <button onClick={() => click('Dead')}>Trust Good Button</button>
      <br />
      <br />
      <button onClick={() => newBtn('Alive')}>GoodButton FRRRR</button>
    </div>
  );
};
export default Button;
