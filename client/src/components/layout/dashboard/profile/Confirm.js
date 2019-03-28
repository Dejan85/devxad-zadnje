import React from "react";

const confirm = ({
  cancel,
  confirmDeletingAcc,
  onChange,
  inputEmailConfirm
}) => {
  return (
    <div className="confirm">
      <div className="confirm_input_holder">
        <p>If you delete account you will lose all you data.</p>
        <input type="radio" onChange={onChange} name="radio1" />
      </div>

      <div className="confirm_input_holder">
        <p>Do you sure you wanna delete it?</p>
        <input type="radio" onChange={onChange} name="radio2" />
      </div>
      <div className="confirm_input_holder">
        <p>Enter your account email.</p>
        <input
          className="input_type_text"
          type="text"
          onChange={onChange}
          name="inputEmailConfirm"
          value={inputEmailConfirm}
        />
      </div>
      <div className="confirm_input_holder_button">
        <input
          type="button"
          value="Confirm Deleting"
          onClick={confirmDeletingAcc}
        />
        <button onClick={cancel}>Cancel Deleting</button>
      </div>
    </div>
  );
};

export default confirm;
