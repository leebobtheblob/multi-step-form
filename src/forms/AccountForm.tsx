import React from "react";
import FormWrapper from "./FormWrapper";

type AccountData = {
  userId: string;
  password: string;
};

type AccountProps = AccountData & {
  updateFields: (fields: Partial<AccountData>) => void;
};

const AccountForm = ({ userId, password, updateFields }: AccountProps) => {
  return (
    <FormWrapper title="User Registration">
      <label> user ID</label>
      <input
        autoFocus
        required
        type="text"
        value={userId}
        onChange={(e) => {
          updateFields({ userId: e.target.value });
        }}
      />
      <label> Password</label>
      <input
        required
        type="text"
        value={password}
        onChange={(e) => updateFields({ password: e.target.value })}
      />
    </FormWrapper>
  );
};

export default AccountForm;
