import { useCallback, useEffect, useRef } from 'react'

export function useBackToTop(
  ref: React.RefObject<HTMLButtonElement>,
  showClasses: string[],
  hideClasses: string[]
) {
  const prevY = useRef(0)

  const show = useCallback(() => {
    ref.current?.classList.add(...showClasses)
    ref.current?.classList.remove(...hideClasses)
  }, [ref, showClasses, hideClasses])

  const hide = useCallback(() => {
    ref.current?.classList.add(...hideClasses)
    ref.current?.classList.remove(...showClasses)
  }, [ref, showClasses, hideClasses])

  const toggleButton = useCallback(() => {
    const scrollingUp = prevY.current > window.scrollY
    const notOnTop = window.scrollY !== 0
    if (scrollingUp && notOnTop) show()
    else hide()
    prevY.current = window.scrollY
  }, [show, hide])

  useEffect(() => {
    window.addEventListener('scroll', toggleButton)
    return () => window.removeEventListener('scroll', toggleButton)
  }, [toggleButton])

  function top() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return { top }
}
