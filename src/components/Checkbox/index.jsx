import React from "react";

const Checkbox = ({ select: [select, setSelect, payment] }) => {
  const [isChecked, setIsChecked] = React.useState(false);

  const onChecked = (e) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      setSelect((select) => [...select, e.target.value]);
    } else {
      const removeMethod = select.filter(
        (payment) => payment !== e.target.value
      );

      setSelect(removeMethod);
    }
  };

  return (
    <label htmlFor={payment}>
      <input
        name={payment}
        id={payment}
        type={"checkbox"}
        key={payment}
        value={payment}
        onChange={(e) => {
          onChecked(e);
          setIsChecked(!isChecked);
        }}
        checked={isChecked}
      />
      {payment}
    </label>
  );
};

export default Checkbox;
