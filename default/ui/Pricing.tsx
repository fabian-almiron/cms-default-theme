import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import { ComponentInfo } from '@/lib/cms-types'

// Component metadata - exported for automatic registration
export const metadata: ComponentInfo = {
  type: 'Pricing',
  name: 'Pricing',
  description: 'Pricing plans and subscription tiers',
  category: 'content-blocks',
  icon: 'DollarSign',
}


export default function Pricing() {
  const plans = [
    {
      title: "Lite",
      price: "$12",
      description: "Great for casual memory keepers",
      features: [
        "1 book per month (30 pages)",
        "Auto‑import & smart layouts",
        "Matte cover",
        "Free US shipping",
        "Skip or pause anytime",
      ],
    },
    {
      title: "Classic",
      price: "$20",
      description: "Our most popular plan",
      features: [
        "1 book per month (60 pages)",
        "Premium satin paper",
        "Add captions & dates",
        "Free US shipping",
        "Skip or pause anytime",
      ],
    },
    {
      title: "Family",
      price: "$35",
      description: "For households with lots of photos",
      features: [
        "2 books per month (60 pages each)",
        "Gift a copy to family",
        "Priority printing",
        "Worldwide shipping options",
        "Skip or pause anytime",
      ],
    },
  ]

  return (
    <section id="pricing" className="w-full py-12 mx-auto md:py-24 lg:py-32 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Pricing
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Simple, photobook‑friendly plans</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Pick the plan that fits your photos. All plans include a 14‑day free trial.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <Card key={i} className={i === 1 ? "border-primary shadow-lg" : ""}>
              <CardHeader>
                <CardTitle>{plan.title}</CardTitle>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant={i === 1 ? "default" : "outline"}>
                  {i === 1 ? "Get Started" : "Start Free Trial"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 