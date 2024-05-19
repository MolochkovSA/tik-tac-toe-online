import { useState, useEffect } from 'react'

export function useNow(intervel, enabled) {
  const [now, setNow] = useState()
  useEffect(() => {
    if (!enabled) {
      setNow(undefined)
      return
    }

    const interval = setInterval(() => {
      setNow(Date.now())
    }, intervel)

    if (!enabled) {
      setNow(undefined)
      return
    }

    return () => {
      clearInterval(interval)
    }
  }, [intervel, enabled])

  return now
}

export function useInterval(intervel, enabled, cb) {
  useEffect(() => {
    if (!enabled) {
      return
    }

    const interval = setInterval(() => {
      cb(Date.now())
    }, intervel)

    return () => {
      clearInterval(interval)
    }
  }, [intervel, enabled])
}
