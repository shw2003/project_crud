import React from "react";
import { useForm } from "react-hook-form";

const EditUserForm = (props) => {
  const { register, errors, handleSubmit, setValue } = useForm({
    defaultValues: props.currentUser
  });

  setValue("name", props.currentUser.name);
  setValue("username", props.currentUser.username);

  const onSubmit = (data, e) => {
    console.log(data);
    data.id = props.currentUser.id;

    props.updateUser(props.currentUser.id, data);

    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        ref={register({
          required: { value: true, message: "Required" }
        })}
      />
      <div>{errors?.name?.message}</div>
      <label>Username</label>
      <input
        type="text"
        name="username"
        ref={register({
          required: { value: true, message: "Required" }
        })}
      />
      <label>mobile</label>
      <input
        type="text"
        name="mobile"
        ref={register({
          required: { value: true, message: "Required" }
        })}
      />
      <label>email</label>
      <input
        type="text"
        name="email"
        ref={register({
          required: { value: true, message: "Required" }
        })}
      />
      <label>address</label>
      <input
        type="text"
        name="address"
        ref={register({
          required: { value: true, message: "Required" }
        })}
      />
      <div>{errors?.username?.message}</div>
      <button>Edit user</button>
    </form>
  );
};

export default EditUserForm;
