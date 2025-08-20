import Image from "next/image"
import { Smartphone, Wand2, Truck } from "lucide-react"
import { ComponentInfo } from '@/lib/cms-types'

// Component metadata - exported for automatic registration
export const metadata: ComponentInfo = {
  type: 'Features',
  name: 'Features',
  description: 'Showcase key product features with icons and descriptions',
  category: 'content-blocks',
  icon: 'Star',
}


export default function Features() {
  return (
    <section id="features" className="w-full py-12 mx-auto md:py-24 lg:py-32 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Why Monthbook
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Designed for your memories
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              We handle selection, layout, and print — so you can relive each month without the hassle.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <div className="grid gap-6">
            <div className="flex gap-4 items-start">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Smartphone className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Auto‑import from your phone</h3>
                <p className="text-muted-foreground">
                  Securely sync from your camera roll. Works with iOS and Android.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Wand2 className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Smart curation & layouts</h3>
                <p className="text-muted-foreground">
                  We pick your best shots and design clean, modern spreads automatically.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Truck className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Premium print, free delivery</h3>
                <p className="text-muted-foreground">
                  Archival paper and beautiful finishes, shipped to your door every month.
                </p>
              </div>
            </div>
          </div>
          <Image
            src="/placeholder.svg?height=400&width=400&text=Photobook+Features"
            width={400}
            height={400}
            alt="Features"
            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full"
          />
        </div>
      </div>
    </section>
  )
} 