import Link from 'next/link'
import { ArrowRight, Search } from 'lucide-react'
import type { SitePost } from '@/lib/site-connector'
import type { HomeTimeSection } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { getEditableCategory, getEditableExcerpt, getEditablePostImage, postHref } from '@/editable/cards/PostCards'

type HomeSectionProps = {
  primaryTask: TaskKey
  primaryRoute: string
  posts: SitePost[]
  timeSections: HomeTimeSection[]
}

const safePosts = (posts: SitePost[]) => posts.filter((post) => Boolean(post?.title))

function SectionHeading({ eyebrow, title, href, linkLabel = 'View all' }: { eyebrow: string; title: string; href?: string; linkLabel?: string }) {
  return (
    <div className="flex items-end justify-between gap-6">
      <div><p className="text-xs font-bold uppercase tracking-[0.12em]">{eyebrow}</p><h2 className="mt-2 font-serif text-3xl leading-tight sm:text-4xl">{title}</h2></div>
      {href ? <Link href={href} className="hidden items-center gap-2 text-sm font-bold hover:text-[#ef4f2b] sm:inline-flex">{linkLabel}<ArrowRight className="h-4 w-4" /></Link> : null}
    </div>
  )
}

export function EditableHomeHero({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const items = safePosts(posts)
  const feature = items[0]
  const side = items.slice(1, 3)

  if (!feature) {
    return (
      <section className="bg-[#f3f0eb] px-4 py-20 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#ef4f2b]">Visual discovery</p>
        <h1 className="mx-auto mt-4 max-w-4xl font-serif text-5xl leading-none sm:text-7xl">Find work that stays with you.</h1>
        <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-black/65">Explore portfolios, creative profiles, and image-led stories from independent makers.</p>
        <Link href={primaryRoute} className="mt-8 inline-flex rounded-full bg-[#211e19] px-7 py-3 text-sm font-bold text-white">Start exploring</Link>
      </section>
    )
  }

  return (
    <section className="mx-auto max-w-[1552px] px-4 pb-10 pt-5 sm:px-6 lg:px-8">
      <div className="mb-3 flex items-center justify-between bg-[#7c9cab] px-5 py-3 text-white">
        <p className="text-xs font-bold uppercase tracking-[0.1em]">New work, new perspectives</p>
        <Link href={primaryRoute} className="text-sm font-bold">Explore now</Link>
      </div>
      <div className="grid bg-[#f3f0eb] lg:grid-cols-[.68fr_1.32fr]">
        <div className="flex flex-col justify-center px-7 py-12 text-center sm:px-12 lg:min-h-[520px]">
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#bd714a]">Featured collection</p>
          <h1 className="mt-5 font-serif text-5xl leading-[.98] sm:text-6xl">Discover visual work with a point of view.</h1>
          <p className="mx-auto mt-6 max-w-md text-base leading-7 text-black/65">{getEditableExcerpt(feature, 165) || 'A handpicked look at fresh projects, portfolios, and the creative people behind them.'}</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link href={postHref(primaryTask, feature, primaryRoute)} className="rounded-full bg-[#211e19] px-7 py-3 text-sm font-bold text-white">View feature</Link>
            
          </div>
        </div>
        <Link href={postHref(primaryTask, feature, primaryRoute)} className="group relative min-h-[420px] overflow-hidden lg:min-h-[520px]">
          <img src={getEditablePostImage(feature)} alt={feature.title || 'Featured visual'} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.02]" />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-6 pt-24 text-white">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-white/70">{getEditableCategory(feature)}</p>
            <h2 className="mt-2 max-w-2xl font-serif text-3xl leading-tight sm:text-4xl">{feature.title}</h2>
          </div>
        </Link>
      </div>
      {side.length ? <div className="mt-4 grid gap-4 md:grid-cols-2">{side.map((post) => <Link key={post.id || post.slug} href={postHref(primaryTask, post, primaryRoute)} className="group grid min-h-[180px] grid-cols-[.9fr_1.1fr] bg-[#f7f7f5]"><div className="p-6"><p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#ef4f2b]">{getEditableCategory(post)}</p><h3 className="mt-3 line-clamp-3 font-serif text-2xl leading-tight">{post.title}</h3><span className="mt-5 inline-flex items-center gap-2 text-xs font-bold">View project<ArrowRight className="h-3.5 w-3.5" /></span></div><div className="relative overflow-hidden"><img src={getEditablePostImage(post)} alt={post.title || ''} className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" /></div></Link>)}</div> : null}
    </section>
  )
}

export function EditableStoryRail({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const items = safePosts(posts).slice(0, 10)
  if (!items.length) return null
  return (
    <section className="border-y border-black/10 bg-white">
      <div className="mx-auto max-w-[1552px] px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Browse by focus" title="Find your next creative reference" href={primaryRoute} />
        <div className="mt-8 flex gap-3 overflow-x-auto pb-4">
          {items.map((post, index) => (
            <Link key={post.id || post.slug} href={postHref(primaryTask, post, primaryRoute)} className="group w-[170px] shrink-0 border border-black/10 bg-white sm:w-[210px]">
              <div className="relative aspect-square overflow-hidden bg-[#f2f0ec]"><img src={getEditablePostImage(post)} alt={post.title || ''} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /></div>
              <div className="p-4 text-center"><p className="line-clamp-2 text-sm font-bold">{index === 0 ? 'New & noteworthy' : getEditableCategory(post)}</p></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export function EditableMagazineSplit({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const items = safePosts(posts).slice(3, 12)
  if (!items.length) return null
  const feature = items[0]
  return (
    <section className="mx-auto max-w-[1552px] px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Curated portfolios" title="Work worth looking at twice" href={primaryRoute} />
      <div className="mt-9 grid gap-5 lg:grid-cols-3">
        <Link href={postHref(primaryTask, feature, primaryRoute)} className="group relative min-h-[560px] overflow-hidden lg:row-span-2">
          <img src={getEditablePostImage(feature)} alt={feature.title || ''} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-7 text-white"><p className="text-xs font-bold uppercase tracking-[0.12em]">Editor&apos;s pick</p><h3 className="mt-3 font-serif text-4xl leading-tight">{feature.title}</h3><p className="mt-3 line-clamp-2 text-sm leading-6 text-white/75">{getEditableExcerpt(feature, 125)}</p></div>
        </Link>
        {items.slice(1, 5).map((post, index) => (
          <Link key={post.id || post.slug} href={postHref(primaryTask, post, primaryRoute)} className="group grid min-h-[268px] overflow-hidden border border-black/10 bg-white sm:grid-cols-2">
            <div className={`relative min-h-[220px] overflow-hidden ${index % 2 ? 'sm:order-2' : ''}`}><img src={getEditablePostImage(post)} alt={post.title || ''} className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" /></div>
            <div className="flex flex-col justify-center p-6"><p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#ef4f2b]">{getEditableCategory(post)}</p><h3 className="mt-3 line-clamp-3 font-serif text-2xl leading-tight">{post.title}</h3><p className="mt-3 line-clamp-2 text-sm leading-6 text-black/60">{getEditableExcerpt(post, 95)}</p></div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export function EditableTimeCollections({ primaryTask, primaryRoute, posts, timeSections }: HomeSectionProps) {
  const timed = safePosts(timeSections.flatMap((section) => section.posts))
  const items = (timed.length ? timed : safePosts(posts).slice(8)).slice(0, 12)
  if (!items.length) return null
  return (
    <>
      <section className="bg-[#dce9ed]">
        <div className="mx-auto max-w-[1552px] px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[.65fr_1.35fr] lg:items-center">
            <div><p className="text-xs font-bold uppercase tracking-[0.12em]">Explore the community</p><h2 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl">People, studios, and visual stories.</h2><p className="mt-5 max-w-md text-base leading-7 text-black/65">Search across disciplines and find the profile behind every project.</p><form action="/search" className="mt-7 flex max-w-md border border-black/20 bg-white"><input name="q" placeholder="Search by name or specialty" className="min-w-0 flex-1 px-4 py-3 text-sm outline-none" /><button className="px-4" aria-label="Search"><Search className="h-5 w-5" /></button></form></div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {items.slice(0, 4).map((post, index) => <Link key={post.id || post.slug} href={postHref(primaryTask, post, primaryRoute)} className={`group bg-white ${index === 0 ? 'md:translate-y-8' : index === 2 ? 'md:-translate-y-5' : ''}`}><div className="aspect-[3/4] overflow-hidden"><img src={getEditablePostImage(post)} alt={post.title || ''} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /></div><div className="p-4"><h3 className="line-clamp-2 font-serif text-xl leading-tight">{post.title}</h3><p className="mt-2 text-[10px] font-bold uppercase tracking-[0.1em] text-[#ef4f2b]">{getEditableCategory(post)}</p></div></Link>)}
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1552px] px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Latest additions" title="Fresh from the community" href={primaryRoute} />
        <div className="mt-9 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {items.slice(4, 12).map((post, index) => <Link key={post.id || post.slug} href={postHref(primaryTask, post, primaryRoute)} className="group"><div className={`overflow-hidden bg-[#f2f0ec] ${index % 3 === 0 ? 'aspect-[4/5]' : 'aspect-[4/3]'}`}><img src={getEditablePostImage(post)} alt={post.title || ''} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /></div><p className="mt-4 text-[10px] font-bold uppercase tracking-[0.12em] text-[#ef4f2b]">{getEditableCategory(post)}</p><h3 className="mt-2 line-clamp-2 font-serif text-2xl leading-tight">{post.title}</h3><p className="mt-2 line-clamp-2 text-sm leading-6 text-black/60">{getEditableExcerpt(post, 92)}</p></Link>)}
        </div>
      </section>
    </>
  )
}

export function EditableHomeCta() {
  return null
}
