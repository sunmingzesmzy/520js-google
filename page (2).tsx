import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const projects = [
  { id: 1, title: "项目 1", description: "这是项目 1 的简短描述。" },
  { id: 2, title: "项目 2", description: "这是项目 2 的简短描述。" },
  { id: 3, title: "项目 3", description: "这是项目 3 的简短描述。" },
]

export default function Projects() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8 text-center">我的项目</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Card key={project.id}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{project.description}</CardDescription>
              <Link href={`/projects/${project.id}`} className="text-blue-500 hover:underline mt-4 inline-block">
                了解更多
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

