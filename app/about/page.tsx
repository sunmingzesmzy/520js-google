import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8 text-center">联系我</h1>
      <form className="max-w-md mx-auto space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            姓名
          </label>
          <Input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            邮箱
          </label>
          <Input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            消息
          </label>
          <Textarea id="message" name="message" rows={4} required />
        </div>
        <Button type="submit" className="w-full">
          发送消息
        </Button>
      </form>
    </div>
  )
}

