import useMultistepForms from "./useMultistepForms";
import UserForm from "./forms/UserForm";
import AddressForm from "./forms/AddressForm";
import AccountForm from "./forms/AccountForm";
import { FormEvent, useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/Accordion";

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
  const {
    forms,
    currentForm,
    currentStepIndex,
    isFirstStep,
    isLastStep,
    next,
    back,
  } = useMultistepForms([
    <UserForm {...data} updateFields={updateFields} />,
    <AccountForm {...data} updateFields={updateFields} />,
    <AddressForm {...data} updateFields={updateFields} />,
  ]);
  const [step, setStep] = useState(0);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!isLastStep) {
      setStep(currentStepIndex);
      return next();
    } // next
    alert(" finally! you dont with forms"); //finish
  };
  useEffect(() => {
    console.log("    currentStepIndex", currentStepIndex);
  });
  const openAccordion = () => {
    setStep((prev) => {
      return prev + 1;
    });
  };
  return (
    <div className=" m-5 p-5 border rounded-lg relative border-sky-500">
      <form onSubmit={handleSubmit}>
        <div className="mt-1 flex gap-1 justify-end">
          <button
            className="bg-slate-300 p-2 rounded-sm"
            onClick={openAccordion}
          >
            {" open accordion"}
          </button>
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
        <Accordion type="multiple" collapsible className="w-full">
          <AccordionItem value="0">
            <AccordionTrigger>
              {" "}
              <div
                className={`${
                  currentStepIndex === 0 ? "text-sky-500 font-bold" : ""
                }`}
              >
                Step 1: User Personal Details
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <UserForm {...data} updateFields={updateFields} />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="1">
            <AccordionTrigger>
              {" "}
              <div
                className={`${
                  currentStepIndex === 1 ? "text-sky-500 font-bold" : ""
                }`}
              >
                Step 2: User Personal Details
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <AccountForm {...data} updateFields={updateFields} />,
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="2">
            <AccordionTrigger>
              {" "}
              <div
                className={`${
                  currentStepIndex === 2 ? "text-sky-500 font-bold" : ""
                }`}
              >
                Step 3: User Personal Details
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <AddressForm {...data} updateFields={updateFields} />
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* <div className="absolute top-5 right-5 right-1">
          {currentStepIndex + 1} / {forms.length}{" "}
        </div> */}
        {/* {currentForm} */}
      </form>
    </div>
  );
}

export default App;
