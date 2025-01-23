import Link from "next/link"

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-gray-800">
          您的名字
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="text-gray-600 hover:text-gray-800">
              首页
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-gray-600 hover:text-gray-800">
              关于
            </Link>
          </li>
          <li>
            <Link href="/projects" className="text-gray-600 hover:text-gray-800">
              项目
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-gray-600 hover:text-gray-800">
              联系
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

