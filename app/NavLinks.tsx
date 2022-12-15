'use client'

import { usePathname } from "next/navigation"
import { categories } from "../constants"
import NavLink from "./NavLink"

function NavLinks() {

    const pathname = usePathname()
    const isActive = (path: string) => {
        return pathname?.split('/').pop() === path;
    }

  return (
    <nav className="grid max-w-6xl grid-cols-4 gap-4 pb-10 mx-auto text-xs border-b md:grid-cols-7 md:text-sm">
        {categories.map((category) => (
            <NavLink key={category.type} slug={category.type} category={category.name} isActive={isActive(category.type)} />
        ))}
    </nav>
  )
}

export default NavLinks