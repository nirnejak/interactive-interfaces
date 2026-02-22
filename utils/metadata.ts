import type { Metadata } from "next"

export const BASE_URL = "https://interactive-interfaces.vercel.app" // Don't include slash at the end

interface MetadataArgs {
  path: string
  title: string
  description: string
  image?: string
}

const getMetadata = ({
  path,
  title,
  description,
  image,
}: MetadataArgs): Metadata => {
  const metaTitle = title
  const metaDescription = description
  const metaImage = image ?? `${BASE_URL}/cover.png`

  const metadata: Metadata = {
    title: metaTitle,
    description: metaDescription,

    applicationName: "Interactive Interfaces",
    creator: "Jitendra Nirnejak",
    authors: [{ name: "Jitendra Nirnejak", url: "https://nirnejak.com/" }],
    robots:
      "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    keywords: [
      "Interactive",
      "Components",
      "React Spring",
      "Spring Animations",
      "Next.js",
      "TailwindCSS",
      "Framer Motion",
      "TypeScript",
    ],

    icons: {
      icon: "/favicon.ico",
      shortcut: "/icons/icon-512x512.png",
      apple: "/icons/icon-512x512.png",
    },
    manifest: `${BASE_URL}/manifest.json`,

    openGraph: {
      type: "website",
      url: `${BASE_URL}${path}`,
      siteName: "Interactive Interfaces",
      title: metaTitle,
      description: metaDescription,
      images: metaImage,
    },

    twitter: {
      card: "summary_large_image",
      // site: "@site",
      creator: "@jeetnirnejak",
      title: metaTitle,
      description: metaDescription,
      images: metaImage,
    },

    appleWebApp: {
      capable: true,
      title: metaTitle,
      startupImage: metaImage,
      statusBarStyle: "black-translucent",
    },

    formatDetection: {
      telephone: true,
      date: true,
      address: true,
      email: true,
      url: true,
    },

    appLinks: {},
  }
  return metadata
}

export default getMetadata
