import { useState, useEffect, Dispatch, SetStateAction } from 'react'
import 'styled-components'

type Response<T> = [T, Dispatch<SetStateAction<T>>]

export function usePersistedStateTheme<T>(
  key: string,
  initialState: T,
): Response<T> {
  const [state, setState] = useState(() => {
    const storageValue =
      typeof window !== 'undefined' ? localStorage.getItem(key) : null
    if (storageValue) {
      return JSON.parse(storageValue)
    } else {
      return initialState
    }
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  return [state, setState]
}
