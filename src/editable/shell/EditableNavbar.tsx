'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, Search, UserRound, X, Plus, LogOut } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableNavbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const { session, logout } = useEditableLocalAuthSession()
  const navItems = useMemo(
    () => SITE_CONFIG.tasks.filter((task) => task.enabled && task.key !== 'profile').map((task) => ({ label: task.label, href: task.route })),
    []
  )

  const links = [{ label: 'Home', href: '/' }, ...navItems]



  return (
    <header className="sticky top-0 z-50 bg-white text-[#1e1b17] shadow-[0_1px_0_rgba(30,27,23,.12)]">

      <div className="mx-auto flex h-[76px] max-w-[1552px] items-center gap-5 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="shrink-0 font-serif text-3xl leading-none text-[#ef4f2b] sm:text-4xl">
          {SITE_CONFIG.name.replace(/\.(com|net|org)$/i, '')}<span className="text-[#ef4f2b]">.</span>
        </Link>

        <form action="/search" className="mx-auto hidden min-w-0 max-w-3xl flex-1 md:flex">
          <label className="flex h-11 w-full items-center border border-black/20 bg-white">
            <span className="px-3 text-xs font-bold">Search</span>
            <input name="q" type="search" placeholder="Creators, disciplines, projects" className="min-w-0 flex-1 border-l border-black/10 bg-transparent px-3 text-sm outline-none placeholder:text-black/35" />
            <button aria-label="Submit search" className="grid h-11 w-12 place-items-center border-l border-black/10"><Search className="h-5 w-5" /></button>
          </label>
        </form>

        <div className="ml-auto hidden items-center gap-5 lg:flex">
          {session ? (
            <>
              <Link href="/create" className="inline-flex items-center gap-2 text-sm font-bold"><Plus className="h-5 w-5" /> Submit</Link>
              <button onClick={logout} className="inline-flex items-center gap-2 text-sm font-bold"><LogOut className="h-5 w-5" /> Logout</button>
            </>
          ) : (
            <Link href="/login" className="inline-flex items-center gap-2 text-sm font-bold"><UserRound className="h-5 w-5" /> Sign in</Link>
          )}
          <Link href="/create" className="rounded-full bg-[#ef4f2b] px-5 py-2.5 text-sm font-bold text-white">Sign Up</Link>
        </div>

        <button onClick={() => setOpen((value) => !value)} className="grid h-10 w-10 place-items-center border border-black/15 lg:hidden" aria-label="Toggle menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <nav className="hidden border-t border-black/10 lg:block">
        <div className="mx-auto flex h-48 max-h-12 max-w-[1552px] items-center gap-8 overflow-x-auto px-8">
          {links.map((item) => {
            const active = item.href === '/' ? pathname === '/' : pathname === item.href || pathname.startsWith(`${item.href}/`)
            return <Link key={item.href} href={item.href} className={`h-12 whitespace-nowrap border-b-2 pt-4 text-xs font-bold uppercase tracking-[0.08em] ${active ? 'border-[#ef4f2b] text-[#ef4f2b]' : 'border-transparent hover:border-black'}`}>{item.label}</Link>
          })}
          <Link href="/about" className="ml-auto whitespace-nowrap text-xs font-bold uppercase tracking-[0.08em]">About</Link>
          <Link href="/contact" className="whitespace-nowrap text-xs font-bold uppercase tracking-[0.08em]">Contact</Link>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-black/10 bg-[#f5f2ed] p-4 lg:hidden">
          <form action="/search" className="flex border border-black/20 bg-white">
            <input name="q" placeholder="Search creators and work" className="min-w-0 flex-1 px-4 py-3 text-sm outline-none" />
            <button className="px-4"><Search className="h-5 w-5" /></button>
          </form>
          <div className="mt-3 grid grid-cols-2 gap-px overflow-hidden border border-black/10 bg-black/10">
            {[...links, { label: 'About', href: '/about' }, { label: 'Contact', href: '/contact' }, { label: session ? 'Submit' : 'Sign in', href: session ? '/create' : '/login' }].map((item) => (
              <Link key={`${item.href}-${item.label}`} href={item.href} onClick={() => setOpen(false)} className="bg-white p-4 text-sm font-bold">{item.label}</Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  )
}
