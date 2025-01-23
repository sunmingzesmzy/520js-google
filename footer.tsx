const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto px-4 py-6 text-center text-gray-600">
        <p>&copy; {new Date().getFullYear()} 您的名字. 保留所有权利。</p>
      </div>
    </footer>
  )
}

export default Footer

