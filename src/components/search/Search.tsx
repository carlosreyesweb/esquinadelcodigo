import { useRouter } from 'next/router'
import { FormEvent, useState } from 'react'
import { FaSearch } from 'react-icons/fa'

interface SearchProps {}
export default function Search(props: SearchProps) {
  const [term, setTerm] = useState('')
  const router = useRouter()

  function search(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    router.push({ pathname: '/results', query: { term } })
  }

  return (
    <form
      className="flex items-center gap-x-small rounded-lg border-2 border-primary px-4 py-2"
      onSubmit={search}
    >
      <input
        type="search"
        value={term}
        onChange={({ target }) => setTerm(target.value)}
        placeholder="Buscar posts..."
        className="bg-transparent outline-none"
        required
      />
      <button type="submit">
        <FaSearch size="1rem" className="text-primary" />
      </button>
    </form>
  )
}
