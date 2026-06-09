'use client'

import Link from 'next/link'
import { Aperture, HeartHandshake, Sparkles } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableFooter() {
  const { session, logout } = useEditableLocalAuthSession()

  return (
    <footer className="bg-white text-[#1e1b17]">
      <section className="bg-[#f3f0eb] px-4 py-14">
        <h2 className="text-center font-serif text-3xl sm:text-4xl">Made for creative discovery</h2>
        <div className="mx-auto mt-10 grid max-w-5xl gap-px bg-black/15 md:grid-cols-3">
          {[
            [Aperture, 'See the work', 'Browse visual projects at full scale, with context that stays easy to scan.'],
            [HeartHandshake, 'Meet the maker', 'Move naturally from an image to the person, studio, or business behind it.'],
            [Sparkles, 'Share your perspective', 'Build a public profile and keep your latest work together in one place.'],
          ].map(([Icon, title, body]) => {
            const Glyph = Icon as typeof Aperture
            return <div key={String(title)} className="bg-[#f3f0eb] p-7 text-center"><Glyph className="mx-auto h-8 w-8" /><h3 className="mt-4 text-lg font-bold">{String(title)}</h3><p className="mt-3 text-sm leading-6 text-black/65">{String(body)}</p></div>
          })}
        </div>
      </section>

      <div className="bg-[#292d31] text-white">
        <div className="mx-auto grid max-w-[1552px] gap-10 px-6 py-14 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
          <div>
            <Link href="/" className="font-serif text-4xl text-[#ff6846]">{SITE_CONFIG.name}</Link>
            <p className="mt-5 max-w-md text-sm leading-7 text-white/65">A visual directory for finding remarkable work and the people who make it.</p>
          </div>
          
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-white/45">Minnorec</p>
            <div className="mt-5 grid gap-3">
              <Link href="/about" className="text-sm font-bold text-white/80">About</Link>
              <Link href="/contact" className="text-sm font-bold text-white/80">Contact</Link>
              <Link href="/create" className="text-sm font-bold text-white/80">Share work</Link>
              {session ? <button onClick={logout} className="text-left text-sm font-bold text-white/80">Logout</button> : <Link href="/login" className="text-sm font-bold text-white/80">Sign in</Link>}
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-white/45">
          © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
