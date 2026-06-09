import type { Metadata } from 'next'
import Link from 'next/link'
import { buildPageMetadata } from '@/lib/seo'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { EditableLocalLoginForm } from '@/editable/components/EditableLocalAuthForms'
import { pagesContent } from '@/editable/content/pages.content'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({ path: '/login', title: 'Login', description: pagesContent.auth.login.metadataDescription })
}

export default function LoginPage() {
  return (
    <EditableSiteShell>
      <main className="bg-white text-[#1e1b17]">
        <section className="mx-auto max-w-[1552px] px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid overflow-hidden border border-black/10 bg-[#f3f0eb] lg:grid-cols-[.78fr_1.22fr]">
            <div className="flex flex-col justify-center p-8 sm:p-12 lg:min-h-[560px]">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#ef4f2b]">{pagesContent.auth.login.badge}</p>
              <h1 className="mt-5 max-w-xl font-serif text-5xl font-normal leading-none sm:text-6xl">Welcome back to the studio.</h1>
              <p className="mt-6 max-w-lg text-base leading-8 text-black/65">Sign in to manage submissions, continue drafts, and keep your creative profile moving.</p>
            </div>
            <div className="flex items-center justify-center bg-[#293d4c] p-6 sm:p-10">
              <div className="w-full max-w-xl border border-white/15 bg-white p-6 shadow-[0_24px_70px_rgba(0,0,0,.22)] sm:p-8">
                <h2 className="font-serif text-4xl font-normal">{pagesContent.auth.login.formTitle}</h2>
                <EditableLocalLoginForm />
                <p className="mt-5 text-sm text-black/65">New here? <Link href="/signup" className="font-bold text-[#ef4f2b] underline-offset-4 hover:underline">{pagesContent.auth.login.createCta}</Link></p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
