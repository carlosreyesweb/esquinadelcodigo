import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'

enum SpinnerState {
  Show = 'show',
  Hide = 'hide',
}

const spinnerStateOpacityMap = {
  [SpinnerState.Show]: 'opacity-100',
  [SpinnerState.Hide]: 'opacity-0',
}

interface SpinnerProps {}
export default function Spinner(props: SpinnerProps) {
  const [state, setState] = useState<SpinnerState>(SpinnerState.Hide)
  const router = useRouter()

  const show = useCallback(() => setState(SpinnerState.Show), [])
  const hide = useCallback(() => setState(SpinnerState.Hide), [])

  useEffect(() => {
    router.events.on('routeChangeStart', show)
    router.events.on('routeChangeComplete', hide)
    router.events.on('routeChangeError', hide)
  }, [router, show, hide])

  return (
    <div
      className={`fixed right-5 top-5 h-4 w-4 animate-spin rounded-full border-2 border-transparent border-t-primary transition-opacity ${spinnerStateOpacityMap[state]}`}
    ></div>
  )
}
