import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { ChevronRight } from 'lucide-react'
import { ExternalLinkIcon } from "@radix-ui/react-icons"

interface ShowcaseItem {
  title: string
  description: string
  image: string
  href: string
  previewlink: string
  affiliation: string
}

const showcaseItems: ShowcaseItem[] = [
  {
    title: "Servis-M",
    description: "Servis-M üçün hazırlanmış kurumsal web saytı. Məhsul, xidmət, həssas dizayn və sürətli yükləmə odaklı olaraq inkişaf etdirildi.",
    image: "/servis-m.png",
    href: "https://servis-m.com/",
    previewlink: "https://servis-m.com/",
    affiliation: "Saytlar",
  },
  {
    title: "HackXana",
    description: "Hackxana üçün hazırlanmış kibertəhlükəsizlik sənədli filmlərinə baxış platforması. İstifadəçi dostu interfeys və fəaliyyət izləmə xüsusiyyətlərini özündə birləşdirir.",
    image: "/hackxana.png",
    href: "https://hackxana.com/",
    previewlink: "https://hackxana.com/",
    affiliation: "Saytlar",
  },
  {
    title: "Portfolio",
    description: "Yaradıcı layihələrim və peşəkar təcrübələrimin bir araya gəldiyi fərdi sərgi məkanı. Dizayn və texnologiyanı birləşdirən işlərimi kəşf edin.",
    image: "/portfolio.png",
    href: "https://hasandamirli.live",
    previewlink: "https://hasandamirli.live",
    affiliation: "Saytlar",
  },
  {
    title: "Restaurant",
    description: "Ləzzətli yeməklər və unudulmaz təcrübələr təqdim edən restoranın rəqəmsal siması. Web sayt asan rezervasiyalar və canlı menyu xüsusiyyətləri ilə müştəri məmnuniyyətinə üstünlük verir.",
    image: "/restoran.png",
    href: "",
    previewlink: "",
    affiliation: "Saytlar",
  },
]

export default function ShowcaseGrid() {
  return (
    <div className="mt-12 max-w-7xl sm:mt-16 md:mt-20 lg:mt-40 px-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {showcaseItems.map((item, index) => (
          <div key={index} className="mb-12 flex flex-col gap-6 sm:mb-16 sm:gap-8 md:mb-20 lg:mb-40 lg:flex-row lg:items-center lg:gap-10">
            <div className="flex flex-1 flex-col gap-4">
              <div>
                <span className="flex max-w-[75px] justify-start rounded-xl text-base font-semibold leading-7 text-indigo-600">{item.affiliation}</span>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-left text-3xl font-bold tracking-tight leading-7 text-gray-900 dark:text-gray-100 sm:text-4xl">
                  {item.title}
                </h2>
                <p className="mt-6 text-left text-lg leading-8 text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
              <div className="mt-6 flex items-center gap-4">
                <Link
                  href={item.previewlink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 items-center justify-center rounded-[1rem] border border-input bg-background px-8 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  Canlı Önizləmə <ExternalLinkIcon className="ml-2 size-4" />
                </Link>
              </div>
            </div>
            <div className="mt-4 aspect-video size-full flex-1 overflow-hidden rounded-xl border bg-muted lg:mt-0 shadow-2xl m-auto">
              <Image
                src={item.image}
                alt={item.title}
                width={800}
                height={450}
                className="m-auto rounded-xl border shadow-2xl"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}