import { render, screen } from "@testing-library/react"
import Child from "./ChildStep"

describe('Child', () => {
  it('should render step correctly', async () => {
    const stepMock = {
      key: "first", value: "yellow", visible: true
    }

    await render(<Child data={stepMock} />)
    
    expect(screen.getByTestId('child-step')).toBeVisible()
  })

  it('should not render step when property visible is false', async () => {
    const stepMock = {
      key: "first", value: "yellow", visible: false
    }

    await render(<Child data={stepMock} />)
    
    expect(screen.getByTestId('child-step')).not.toBeVisible()
  })
})