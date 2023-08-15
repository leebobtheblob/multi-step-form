import React from "react";
import FormWrapper from "./FormWrapper";

type AddressData = {
  street: string;
  city: string;
  state: string;
  zip: string;
};

type AddressProps = AddressData & {
  updateFields: (fields: Partial<AddressData>) => void;
};

const AddressForm = ({
  street,
  city,
  state,
  zip,
  updateFields,
}: AddressProps) => {
  return (
    <FormWrapper title="Address Details">
      <label>Street</label>
      <input
        autoFocus
        value={street}
        onChange={(e) => {
          updateFields({ street: e.target.value });
        }}
      />
      <label>City</label>
      <input
        value={city}
        onChange={(e) => {
          updateFields({ city: e.target.value });
        }}
      />
      <label>State</label>
      <input
        value={state}
        onChange={(e) => {
          updateFields({ state: e.target.value });
        }}
      />
      <label>Zip</label>
      <input
        value={zip}
        onChange={(e) => {
          updateFields({ zip: e.target.value });
        }}
      />
    </FormWrapper>
  );
};

export default AddressForm;
