'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import './style.css'

export default function NavButton(href, text) {
  const pathname = usePathname()
  let color = 'bgGray'

  if (pathname === href) {
    color = 'bgGreen'
  }

  return (
    <Link href={href}>
      <div data-comp="NavButton">
        <div className={color}></div>
        <p>{text}</p>
      </div>
    </Link>
  )
}
