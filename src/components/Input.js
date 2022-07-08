const Input = ({ addHandler, handleClick, input, setInput }) => {
  return (
    <div className="submit">
      <input
        className="inputTab"
        onChange={addHandler}
        autoComplete="off"
        placeholder="Add Item here..."
        name="input"
        type="text"
        value={input}
      />
      <button className="submitBtn" onClick={handleClick}>
        +
      </button>
    </div>
  );
};

export default Input;
