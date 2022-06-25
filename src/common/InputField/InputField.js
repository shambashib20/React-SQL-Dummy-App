import React from "react";

function InputField({ value, onChange }) {
  const handleChange = (e) => {
    const { value } = e.target;
    onChange(value);
  };
  return (
    <form>
      <textarea
        rows="30"
        cols="85"
        value={value}
        onChange={handleChange}
      ></textarea>
    </form>
  );
}

export default InputField;
