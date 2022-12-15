
import Link from "next/link";

type Props = {
    slug: string; 
    category: string;
    isActive: boolean;
};

function NavLink({ slug, category, isActive }: Props) {
  return (
    <Link href={`/news/${slug}`} className={`navLink ${isActive && "underline decoration-yellow-400 underline-offset-4 font-bold text-lg"}`}>
        {category}
    </Link>
  )
}

export default NavLink