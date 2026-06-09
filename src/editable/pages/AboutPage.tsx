import { Aperture, ArrowRight, Image as ImageIcon, UserRound } from 'lucide-react'
import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/site-config'
import { fetchTaskPosts } from '@/lib/task-data'
import { pagesContent } from '@/editable/content/pages.content'
import { getEditableCategory, getEditableExcerpt, getEditablePostImage, postHref } from '@/editable/cards/PostCards'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

export default async function AboutPage() {
  const values = pagesContent.about.values
  const imagePosts = await fetchTaskPosts('image', 3)
  const featureCards = [
    {
      icon: Aperture,
      label: 'Visual work',
      fallback: 'Browse image-led projects from the community.',
      post: imagePosts[0],
      href: imagePosts[0] ? postHref('image', imagePosts[0], '/image') : '/image',
    },
    {
      icon: UserRound,
      label: 'Image spotlight',
      fallback: 'See another image-led project from the community.',
      post: imagePosts[1] || imagePosts[0],
      href: imagePosts[1] ? postHref('image', imagePosts[1], '/image') : imagePosts[0] ? postHref('image', imagePosts[0], '/image') : '/image',
    },
    {
      icon: ImageIcon,
      label: 'Project stories',
      fallback: 'Follow the context, craft, and ideas around each project.',
      post: imagePosts[2] || imagePosts[0],
      href: imagePosts[2] ? postHref('image', imagePosts[2], '/image') : imagePosts[0] ? postHref('image', imagePosts[0], '/image') : '/image',
    },
  ]

  return (
    <EditableSiteShell>
      <main className="bg-white text-[#1e1b17]">
        <section className="mx-auto max-w-[1552px] px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid overflow-hidden border border-black/10 bg-[#f3f0eb] lg:grid-cols-[.72fr_1.28fr]">
            <div className="flex flex-col justify-center p-8 sm:p-12 lg:min-h-[520px]">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#ef4f2b]">{pagesContent.about.badge}</p>
              <h1 className="mt-5 max-w-xl font-serif text-5xl font-normal leading-none sm:text-6xl">About {SITE_CONFIG.name}</h1>
              <p className="mt-6 max-w-xl text-base leading-8 text-black/65">{pagesContent.about.description}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/image" className="rounded-full bg-[#211e19] px-7 py-3 text-sm font-bold text-white">Browse work</Link>
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-full border border-black/25 bg-white px-7 py-3 text-sm font-bold">Contact <ArrowRight className="h-4 w-4" /></Link>
              </div>
            </div>
            <div className="grid min-h-[420px] grid-cols-1 gap-2 bg-[#293d4c] p-5 text-white sm:grid-cols-3">
              {featureCards.map(({ icon: Glyph, label, fallback, post, href }, index) => {
                return (
                  <Link key={label} href={href} className={`${index === 1 ? 'sm:translate-y-8' : ''} group relative flex min-h-[300px] overflow-hidden bg-white/12 p-5`}>
                    {post ? <img src={getEditablePostImage(post)} alt={post.title || label} className="absolute inset-0 h-full w-full object-cover opacity-55 transition duration-500 group-hover:scale-105 group-hover:opacity-70" /> : null}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="relative z-10 mt-auto">
                      <Glyph className="h-8 w-8" />
                      <p className="mt-4 font-serif text-2xl leading-tight">{label}</p>
                      <p className="mt-2 line-clamp-2 text-[10px] font-bold uppercase tracking-[0.12em] text-white/60">{post ? getEditableCategory(post) : 'Explore'}</p>
                      <p className="mt-3 line-clamp-3 text-sm leading-6 text-white/78">{post ? getEditableExcerpt(post, 120) || post.title : fallback}</p>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-[1552px] gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[.82fr_1.18fr] lg:px-8">
          <article className="border-t-4 border-[#ef4f2b] bg-[#f7f7f5] p-7 sm:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#ef4f2b]">What we make easier</p>
            <h2 className="mt-4 font-serif text-4xl font-normal leading-tight">A clearer place to discover people through their work.</h2>
            <div className="mt-7 space-y-5 text-sm leading-8 text-black/65">
              {pagesContent.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </article>
          <div className="grid gap-px bg-black/10 sm:grid-cols-3 lg:grid-cols-1">
            {values.map((value, index) => (
              <div key={value.title} className="bg-white p-7">
                <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#ef4f2b]">Point {String(index + 1).padStart(2, '0')}</p>
                <h3 className="mt-4 font-serif text-3xl font-normal leading-tight">{value.title}</h3>
                <p className="mt-4 text-sm leading-7 text-black/60">{value.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
