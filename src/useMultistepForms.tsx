import React from "react";
import { useState } from "react";
const useMultistepForms = (forms: ReactElements[]) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const next = () => {
    // setting to next index
    // i = currentstepIndex?
    setCurrentStepIndex((i) => {
      if (i >= forms.length - 1) return i;
      return i + 1;
    });
  };

  const back = () => {
    setCurrentStepIndex((i) => {
      if (i <= 0) return 0;
      return i - 1;
    });
  };

  const goto = (index: number) => {
    return setCurrentStepIndex(index);
  };

  return {
    forms,
    currentStepIndex,
    currentForm: forms[currentStepIndex], //current step
    goto,
    next,
    back,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === forms.length - 1,
  };
};

export default useMultistepForms;
