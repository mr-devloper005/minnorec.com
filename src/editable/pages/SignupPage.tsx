import type { Metadata } from 'next'
import Link from 'next/link'
import { Aperture, Image as ImageIcon, Sparkles } from 'lucide-react'
import { buildPageMetadata } from '@/lib/seo'
import { fetchTaskPosts } from '@/lib/task-data'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { EditableLocalSignupForm } from '@/editable/components/EditableLocalAuthForms'
import { pagesContent } from '@/editable/content/pages.content'
import { getEditableCategory, getEditableExcerpt, getEditablePostImage, postHref } from '@/editable/cards/PostCards'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({ path: '/signup', title: 'Sign up', description: pagesContent.auth.signup.metadataDescription })
}

export default async function SignupPage() {
  const imagePosts = await fetchTaskPosts('image', 3)
  const postCards = [
    { icon: Aperture, label: 'Featured work', post: imagePosts[0], href: imagePosts[0] ? postHref('image', imagePosts[0], '/image') : '/image' },
    { icon: ImageIcon, label: 'Project story', post: imagePosts[1] || imagePosts[0], href: imagePosts[1] ? postHref('image', imagePosts[1], '/image') : imagePosts[0] ? postHref('image', imagePosts[0], '/image') : '/image' },
    { icon: Sparkles, label: 'Image spotlight', post: imagePosts[2] || imagePosts[0], href: imagePosts[2] ? postHref('image', imagePosts[2], '/image') : imagePosts[0] ? postHref('image', imagePosts[0], '/image') : '/image' },
  ]

  return (
    <EditableSiteShell>
      <main className="bg-white text-[#1e1b17]">
        <section className="mx-auto max-w-[1552px] px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid overflow-hidden border border-black/10 lg:grid-cols-[1.08fr_.92fr]">
            <div className="flex flex-col justify-center bg-[#f3f0eb] p-8 sm:p-12">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#ef4f2b]">{pagesContent.auth.signup.badge}</p>
              <h1 className="mt-5 max-w-xl font-serif text-5xl font-normal leading-none sm:text-6xl">Create your profile and share the work.</h1>
              <p className="mt-6 max-w-lg text-base leading-8 text-black/65">Build a simple account for submissions, images, profile details, and new creative updates.</p>
              <div className="mt-8 border border-black/10 bg-white p-6 shadow-[0_18px_60px_rgba(30,27,23,.08)] sm:p-8">
                <h2 className="font-serif text-3xl font-normal">{pagesContent.auth.signup.formTitle}</h2>
                <EditableLocalSignupForm />
                <p className="mt-5 text-sm text-black/65">Already have an account? <Link href="/login" className="font-bold text-[#ef4f2b] underline-offset-4 hover:underline">{pagesContent.auth.signup.loginCta}</Link></p>
              </div>
            </div>
            <aside className="bg-[#293d4c] p-5 text-white sm:p-7">
              <p className="px-1 text-xs font-bold uppercase tracking-[0.12em] text-white/60">From the community</p>
              <h2 className="px-1 pt-4 font-serif text-4xl font-normal leading-tight">See what members are sharing.</h2>
              <div className="mt-7 grid gap-3">
                {postCards.map(({ icon: Icon, label, post, href }, index) => (
                  <Link key={`${label}-${index}`} href={href} className="group grid min-h-[160px] overflow-hidden bg-white/10 sm:grid-cols-[160px_minmax(0,1fr)]">
                    <div className="relative min-h-[160px] bg-white/10">
                      {post ? <img src={getEditablePostImage(post)} alt={post.title || label} className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" /> : <div className="grid h-full place-items-center"><Icon className="h-9 w-9 text-white/70" /></div>}
                    </div>
                    <div className="flex flex-col justify-center p-5">
                      <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#ffb7a7]">{post ? getEditableCategory(post) : label}</p>
                      <h3 className="mt-2 line-clamp-2 font-serif text-2xl font-normal leading-tight">{post?.title || label}</h3>
                      <p className="mt-3 line-clamp-2 text-sm leading-6 text-white/70">{post ? getEditableExcerpt(post, 92) || 'Open this post to see more.' : 'New posts will appear here as they are published.'}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </aside>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
