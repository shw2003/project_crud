import React from "react";
import { useForm } from "react-hook-form";

const AddUserForm = (props) => {
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    data.id = null;
    console.log(data);
    props.addUser(data);
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="textField">
        <label>Name</label>
        <input
          type="text"
          name="name"
          ref={register({
            required: { value: true, message: "Required" }
          })}
        />
        <div className="error">{errors?.name?.message}</div>
      </div>
      <div className="textField">
        <label>Username</label>
        <input
          type="text"
          name="username"
          ref={register({
            required: { value: true, message: "Required" }
          })}
        />
        <div className="error">{errors?.username?.message}</div>
      </div>
      <div className="textField">
        <label>mobile</label>
        <input
          type="tel"
          name="mobile"
          ref={register({
            required: { value: true, message: "Required" }
          })}
        />
        <div className="error">{errors?.mobile?.message}</div>
      </div>
      <div className="textField">
        <label>email</label>
        <input
          type="text"
          name="email"
          ref={register({
            required: { value: true, message: "Required" }
          })}
        />
        <div className="error">{errors?.email?.message}</div>
      </div>
      <div className="textField">
        <label>address</label>
        <input
          type="text"
          name="address"
          ref={register({
            required: { value: true, message: "Required" }
          })}
        />
        <div className="error">{errors?.address?.message}</div>
      </div>
      <button className="Add-btn">Add new user</button>
    </form>
  );
};

export default AddUserForm;
