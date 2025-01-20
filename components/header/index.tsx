import Link from "next/link"
import { PhBookmarkSimpleDuotone } from "../icons/bookmark"

export const Header: React.FC = () => {
  return (
    <header className="w-full min-h-[50px] flex justify-between bg-white z-10 items-center border-blue border-b sticky top-0">
      <div className="aspect-square h-full bg-blue"></div>
      <Link href="/" className="font-garamond text-[1.5rem] font-semibold">whatcook</Link>
      <Link href="/saved" className="mr-2" >
        <PhBookmarkSimpleDuotone className="text-3xl text-yellow" />
      </Link>
    </header>
  )
}
