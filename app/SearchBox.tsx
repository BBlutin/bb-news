'use client'

import { useRouter } from "next/navigation"
import { FormEvent, useState } from "react"

function SearchBox() {

  const [input, setInput] = useState('')
  const router = useRouter()

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input) return;
    router.push(`/search?term${input}`);
  }

  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center justify-between max-w-6xl px-5 mx-auto"
    >
        <input
            type="text"
            placeholder="Chercher un mot clé..."
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 w-full text-gray-500 placeholder-gray-500 bg-transparent rounded-sm outline-none dark:text-yellow-400 h-14"
        />
        <button 
          type="submit"
          disabled={!input}
          className="text-yellow-400 disabled:text-gray-400"
        >
          Recherche
        </button>
    </form>
  )
}

export default SearchBox