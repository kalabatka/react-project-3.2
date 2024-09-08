import React, { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');

  const handleClick = () => {
    setInputValue('');
  };

  return (
    <div>
      <InputField inputValue={inputValue} setInputValue={setInputValue} />
      <ClearButton handleClick={handleClick} />
    </div>
  );
}

function InputField({ inputValue, setInputValue }) {
  return (
    <input 
      type="text" 
      value={inputValue} 
      onChange={(e) => setInputValue(e.target.value)} 
      style={{ padding: "10px",
        fontSize: "16px",
        marginRight: "10px",
        borderRadius: "5px",
        borderColor: "blue",
        borderWidth: "3px",
        background: "#AFEEEE", }}
    />
  );
}

function ClearButton({ handleClick }) {
  return (
    <button 
      onClick={handleClick} 
      style={{ padding: "10px 20px",
        fontSize: "16px",
        cursor: "pointer",
        borderRadius: "5px",
        borderColor: "blue",
        borderWidth: "3px",
        background: "#AFEEEE" ,}}
    >
      Очистить
    </button>
  );
}

export default App;
