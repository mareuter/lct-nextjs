'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import moon_info_tab from '@/public/moon_info_tab.png'
import moon_info_tab_sel from '@/public/moon_info_tab_sel.png'

const links = [{ name: 'Moon Info', href: '/moon_info', icon: moon_info_tab, icon_sel: moon_info_tab_sel }]

const NavBar = () => {
  const pathname = usePathname()

  return (
    <>
      {links.map((link) => {
        return (
          <Link key={link.name} href={link.href} className="flex grow flex-col items-center justify-center text-sm">
            <p>{link.name}</p>
            <Image src={pathname === link.href ? link.icon_sel : link.icon} alt={link.name} />
          </Link>
        )
      })}
    </>
  )
}

export default NavBar
