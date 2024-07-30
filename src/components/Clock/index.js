import {useState, useEffect} from 'react'

import {ClockContainer, Heading, ClockImage, Time} from './styledComponents'

const Clock = () => {
  const [date, setData] = useState(new Date())
  useEffect(() => {
    const timerId = setInterval(() => {
      setData(new Date())
    }, 1000)
    console.log('Effected is Excuted and Intervels is Schulded')
    return () => {
      clearInterval(timerId)
      console.log('cleamUp Function executed')
    }
  }, [])
  return (
    <ClockContainer>
      <Heading>Clock</Heading>
      <ClockImage
        src="https://assets.ccbp.in/frontend/hooks/clock-img.png"
        alt="clock"
      />
      <Time> {date.toLocaleTimeString()} </Time>
    </ClockContainer>
  )
}

export default Clock
