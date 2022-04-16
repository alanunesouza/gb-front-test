import { act, render, screen } from "@testing-library/react"
import Parent from "./ParentSteps"

describe('Parent', () => {
  it('should render steps correctly', async () => {
    const dataMock = [
      { key: "first", value: "yellow", visible: true },
      { key: "second", value: "blue", visible: false }
    ]
    await render(<Parent data={dataMock} />)

    expect(screen.getByTestId('parent-steps')).toBeVisible()

    const childSteps = screen.getAllByTestId('child-step')
    expect(childSteps?.length).toBe(2)
    expect(childSteps[0]).toBeVisible()
    expect(childSteps[1]).not.toBeVisible()
  })

  it('should render steps correctly after finish duration firstStep', async () => {
    const dataMock = [
      { key: "first", value: "yellow", visible: true, duration: 1000 },
      { key: "second", value: "blue", visible: false }
    ]
    await render(<Parent data={dataMock} />)

    expect(screen.getByTestId('parent-steps')).toBeVisible()

    const childSteps = screen.getAllByTestId('child-step')

    expect(childSteps?.length).toBe(2)
    expect(childSteps[0]).toBeVisible()
    expect(childSteps[1]).not.toBeVisible()

    await act(() => new Promise((resolve) => {
        setTimeout(resolve, 1000)
    }))

    expect(screen.getAllByTestId('child-step')[1]).toBeVisible()
  })
})