const NewPage = () => {
  const newWord = 'kanda';
  function hii(raghav) {
    return <div>{newWord}</div>;
  }
  const Greet = 'hellow from New Page';

  return (
    <div>
      <p>{Greet}</p>
      <p>{hii('landiiii')}</p>
    </div>
  );
};
export default NewPage;
