import React from "react";
import { useState } from "react";
const useMultistepForms = (steps: ReactElements[]) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const next = () => {
    // setting to next index
    // i = currentstepIndex?
    setCurrentStepIndex((i) => {
      if (i >= steps.length - 1) return i;
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
    steps,
    currentStepIndex,
    step: steps[currentStepIndex], //current step
    goto,
    next,
    back,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
  };
};

export default useMultistepForms;
