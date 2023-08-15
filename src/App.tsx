import useMultistepForms from "./useMultistepForms";
import UserForm from "./forms/UserForm";
import AddressForm from "./forms/AddressForm";
import AccountForm from "./forms/AccountForm";
import { FormEvent, useState } from "react";

type FormData = {
  firstName: string;
  lastName: string;
  age: string;
  userId: string;
  password: string;
  street: string;
  city: string;
  state: string;
  zip: string;
};

const init_data: FormData = {
  firstName: "",
  lastName: "",
  age: "",
  userId: "",
  password: "",
  street: "",
  city: "",
  state: "",
  zip: "",
};

function App() {
  const [data, setData] = useState(init_data);
  const updateFields = (fields: Partial<FormData>) => {
    setData((prev) => {
      return {
        ...prev,
        ...fields,
      };
    });
  };
  const { steps, step, currentStepIndex, isFirstStep, isLastStep, next, back } =
    useMultistepForms([
      <UserForm {...data} updateFields={updateFields} />,
      <AccountForm {...data} updateFields={updateFields} />,
      <AddressForm {...data} updateFields={updateFields} />,
    ]);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!isLastStep) return next(); // next
    alert(" finally! you dont with forms"); //finish
  };
  return (
    <div className=" m-5 p-5 border rounded-lg relative border-sky-500">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-3 mb-5">
          <div
            className={`${
              currentStepIndex === 0 ? "text-sky-500 font-bold" : ""
            }`}
          >
            Step 1: User Personal Details
          </div>
          <div
            className={`${
              currentStepIndex === 1 ? "text-sky-500 font-bold" : ""
            }`}
          >
            Step 2: User Register{" "}
          </div>
          <div
            className={`${
              currentStepIndex === 2 ? "text-sky-500 font-bold" : ""
            }`}
          >
            Step 3: Address
          </div>
        </div>
        <div className="absolute top-5 right-5 right-1">
          {currentStepIndex + 1} / {steps.length}{" "}
        </div>
        {step}

        {/* constinare for buttons*/}
        <div className="mt-1 flex gap-1 justify-end">
          {!isFirstStep && (
            <button
              onClick={back}
              type="button"
              className="bg-slate-300 p-2 rounded-sm"
            >
              Back
            </button>
          )}

          {!isLastStep ? (
            <button type="submit" className="bg-slate-300  p-2 rounded-sm">
              Next
            </button>
          ) : (
            <button type="submit" className="bg-slate-300 p-2 rounded-sm">
              Finish
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default App;
