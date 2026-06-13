import { useEffect, useState } from 'react'

function LoadingTimer({ label }) {
  const [elapsedSeconds, setElapsedSeconds] = useState(0)

  useEffect(() => {
    const startedAt = Date.now()
    const intervalId = setInterval(() => {
      setElapsedSeconds(Math.floor((Date.now() - startedAt) / 1000))
    }, 250)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <span className="loading-timer" aria-live="polite">
      <span className="spinner" aria-hidden="true" />
      {label} {elapsedSeconds}s
    </span>
  )
}

export default LoadingTimer
