'use client'

import { Image as ImageIcon, Mail, MessageSquare, Sparkles } from 'lucide-react'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableContactLeadForm } from '@/editable/components/EditableContactLeadForm'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

const lanes = [
  { icon: ImageIcon, title: 'Gallery launches', body: 'Share new visual collections, portfolio updates, and creative campaigns.' },
  { icon: Sparkles, title: 'Creator features', body: 'Send context for artists, studios, photographers, designers, and independent makers.' },
  { icon: Mail, title: 'Partnership notes', body: 'Reach out about usage rights, commercial requests, and profile-connected projects.' },
]

export default function ContactPage() {
  return (
    <EditableSiteShell>
      <main className="bg-white text-[#1e1b17]">
        <section className="mx-auto max-w-[1552px] px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid overflow-hidden border border-black/10 lg:grid-cols-[.72fr_1.28fr]">
            <div className="bg-[#293d4c] p-8 text-white sm:p-12 lg:min-h-[520px]">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-white/60">{pagesContent.contact.eyebrow}</p>
              <h1 className="mt-5 max-w-xl font-serif text-5xl font-normal leading-none sm:text-6xl">Tell us what you are building.</h1>
              <p className="mt-6 max-w-xl text-base leading-8 text-white/72">{pagesContent.contact.description}</p>
            </div>
            <div className="bg-[#f3f0eb] p-6 sm:p-10 lg:p-12">
              <div className="grid gap-px bg-black/10 md:grid-cols-3">
                {lanes.map((lane) => (
                  <article key={lane.title} className="bg-[#f3f0eb] p-6">
                    <lane.icon className="h-6 w-6 text-[#ef4f2b]" />
                    <h2 className="mt-5 font-serif text-2xl font-normal leading-tight">{lane.title}</h2>
                    <p className="mt-3 text-sm leading-7 text-black/60">{lane.body}</p>
                  </article>
                ))}
              </div>
              <div className="mt-6 border border-black/10 bg-white p-6 shadow-[0_18px_60px_rgba(30,27,23,.08)] sm:p-8">
                <div className="mb-6 flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center bg-[#211e19] text-white"><MessageSquare className="h-5 w-5" /></div>
                  <h2 className="font-serif text-3xl font-normal">{pagesContent.contact.formTitle}</h2>
                </div>
                <EditableContactLeadForm />
              </div>
            </div>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
