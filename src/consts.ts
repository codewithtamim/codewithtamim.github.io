import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'CodeWithTamim',
  description:
    'Personal blog of Tamim Hossain - Founder & CEO at The Byte Array. Sharing insights on Network Programming, Android Development, VPN/Proxy technologies, and On Device ML.',
  href: 'https://codewithtamim.github.io',
  author: 'Tamim Hossain',
  locale: 'en-US',
  featuredPostCount: 2,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/',
    label: 'home',
  },
  {
    href: '/blog',
    label: 'blog',
  },
  {
    href: '/projects',
    label: 'projects',
  },
  {
    href: '/experience',
    label: 'experience',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/codewithtamim',
    label: 'GitHub',
  },
  {
    href: 'https://t.me/CodeWithTamim',
    label: 'Telegram',
  },
  {
    href: 'mailto:tamimh.dev@gmail.com',
    label: 'Email',
  },
  {
    href: 'https://thebytearray.org',
    label: 'Website',
  },
  {
    href: '/rss.xml',
    label: 'RSS',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Telegram: 'lucide:send',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
