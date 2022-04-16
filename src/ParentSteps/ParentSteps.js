import React from "react";
import ChildStep from "../ChildStep/ChildStep";
import './ParentSteps.css'

const ParentStep = ({ data }) => {
  const [steps, setSteps] = React.useState(data)

  const updateVisibilityStep = React.useCallback((indexNextStepRender) => {
    setSteps(prevState => prevState.map((stepItem, index) => {
      if (indexNextStepRender === index) {
        return { ...stepItem, visible: true }
      }
      
      return stepItem
    }))
  }, [setSteps])

  return (
    <main data-testid="parent-steps">
      <h1 className="center">Steps</h1>

      {steps.map((stepItem, index) => (
        <ChildStep key={stepItem.key} data={stepItem} finishedRendering={() => updateVisibilityStep(index + 1)} />
      ))}
    </main>
  );
}

export default ParentStep;
