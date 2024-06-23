

const Key = ({ keyOb, keyClickHandler }) => {
  const clickHandler = () => {
    keyClickHandler(keyOb);
  };

  return (
    <button
      onClick={clickHandler}
      className={
        "key" +
        (keyOb.value === "C" ? " span2" : "") +
        (keyOb.value === "=" ? " result" : "")
      }
    >
      {keyOb.value}
    </button>
  );
};

export default Key;