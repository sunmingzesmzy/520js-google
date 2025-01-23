import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-bold mb-4">欢迎来到我的个人网站</h1>
      <p className="text-xl mb-8">我是一名 [您的职业]，专注于 [您的专业领域]</p>
      <div className="space-x-4">
        <Button asChild>
          <Link href="/projects">查看我的项目</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/contact">联系我</Link>
        </Button>
      </div>
    </div>
  )
}

