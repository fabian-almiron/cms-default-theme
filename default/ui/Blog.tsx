import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User } from "lucide-react"
import { ComponentInfo } from '@/lib/cms-types'

// Component metadata - exported for automatic registration
export const metadata: ComponentInfo = {
  type: 'Blog',
  name: 'Blog',
  description: 'Blog posts grid with featured articles',
  category: 'content-blocks',
  icon: 'FileText',
}


export default function Blog() {
  const blogPosts = [
    {
      title: "How to choose photos for your monthly book",
      description: "Quick tips for picking the moments that matter — without overthinking it.",
      author: "John Smith",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Curation",
      image: "/placeholder.svg?height=200&width=300&text=Curation"
    },
    {
      title: "iPhone vs Android: getting the best print",
      description: "Simple settings to ensure your phone photos look stunning on paper.",
      author: "Sarah Johnson",
      date: "March 12, 2024",
      readTime: "7 min read",
      category: "Photo Tips",
      image: "/placeholder.svg?height=200&width=300&text=Photo+Tips"
    },
    {
      title: "Behind the paper: what makes prints archival?",
      description: "We break down paper weight, finish, and longevity in plain English.",
      author: "Michael Chen",
      date: "March 10, 2024",
      readTime: "6 min read",
      category: "Printing",
      image: "/placeholder.svg?height=200&width=300&text=Printing"
    },
    {
      title: "Design principles for timeless layouts",
      description: "The layout rules we follow so your books look clean and modern year after year.",
      author: "Emily Rodriguez",
      date: "March 8, 2024",
      readTime: "8 min read",
      category: "Design",
      image: "/placeholder.svg?height=200&width=300&text=Design"
    },
    {
      title: "Gifting Monthbook: ideas they’ll love",
      description: "From baby’s first year to travel recaps — thoughtful gift subscriptions for everyone.",
      author: "David Kim",
      date: "March 5, 2024",
      readTime: "4 min read",
      category: "Gifting",
      image: "/placeholder.svg?height=200&width=300&text=Gifting"
    },
    {
      title: "Customer spotlight: The Patel family’s year in books",
      description: "How one family turned 12 months of phone photos into a library of memories.",
      author: "Lisa Wang",
      date: "March 3, 2024",
      readTime: "6 min read",
      category: "Stories",
      image: "/placeholder.svg?height=200&width=300&text=Stories"
    }
  ]

  return (
    <section id="blog" className="w-full py-12 mx-auto md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Blog</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Tips, printing, and stories</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Everything you need to make beautiful monthly photobooks.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, i) => (
            <Card key={i} className="group hover:shadow-lg transition-shadow">
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={post.image}
                    width={300}
                    height={200}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                  <Badge className="absolute top-4 left-4">{post.category}</Badge>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="mb-2 group-hover:text-primary transition-colors">
                  <Link href="#" className="line-clamp-2">
                    {post.title}
                  </Link>
                </CardTitle>
                <CardDescription className="mb-4 line-clamp-3">
                  {post.description}
                </CardDescription>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 