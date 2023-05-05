import { useRef } from 'react'
import { FaChevronUp } from 'react-icons/fa'
import { useBackToTop } from './useBackToTop'

interface BackToTopProps {}
export default function BackToTop(props: BackToTopProps) {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const { top } = useBackToTop(
    buttonRef,
    ['opacity-1', 'pointer-events-auto'],
    ['opacity-0', 'pointer-events-none']
  )

  return (
    <button
      ref={buttonRef}
      className="fixed bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-x-small rounded-md bg-secondary px-4 py-2 font-medium text-primary ring-2 ring-inset ring-primary transition-opacity"
      onClick={top}
    >
      <FaChevronUp />
      <span>Volver arriba</span>
    </button>
  )
}
