import React from 'react'
import './ChildStep.css'

const ChildStep = ({ data, finishedRendering }) => {
  const [bgColor, setBgColor] = React.useState('transparent')

  React.useEffect(() => {
    if (data.visible) {
      setTimeout(() => {
        setBgColor(data.color)
        finishedRendering()
      }, data.duration)
    }
  }, [data, finishedRendering])

  return (
    <div 
      data-testid="child-step" 
      className='box' 
      style={{ 
        border: `1px solid ${data.color}`,
        visibility: data.visible ? 'visible' : 'hidden',
        backgroundColor: bgColor,
        transition: 'background-color 1000ms linear'
      }} 
    >
      <div className='loader' style={{ color: data.color}} />
    </div>
  )
}

export default ChildStep