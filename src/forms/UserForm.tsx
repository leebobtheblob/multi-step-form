import React from "react";
import FormWrapper from "./FormWrapper";

type UserData = { firstName: string; lastName: string; age: string };

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

const UserForm = ({
  firstName,
  lastName,
  age,
  updateFields,
}: UserFormProps) => {
  return (
    <FormWrapper title="User Details">
      <label>First Name</label>
      <input
        autoFocus
        required
        value={firstName}
        onChange={(e) => updateFields({ firstName: e.target.value })}
      ></input>
      <label>Last Name</label>
      <input
        value={lastName}
        onChange={(e) => {
          updateFields({ lastName: e.target.value });
        }}
      ></input>
      <label>Age</label>
      <input
        value={age}
        onChange={(e) => updateFields({ age: e.target.value })}
      ></input>
    </FormWrapper>
  );
};

export default UserForm;
