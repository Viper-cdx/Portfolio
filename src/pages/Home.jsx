function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center text-center px-6">
      <div>
        <p className="text-orange-500 text-lg mb-4">👋 Hey there, I'm</p>
        <h1 className="text-8xl font-bold mb-6 bg-gradient-to-br from-white to-orange-500 bg-clip-text text-transparent">
          Jerry
        </h1>
        <p className="text-xl text-white/60 mb-10">
          I build websites, mobile apps & AI stuff.
        </p>
        <div className="flex gap-4 justify-center">
          <a href="/projects" className="px-8 py-3 bg-orange-500 text-white rounded-full font-bold hover:opacity-85 transition-opacity">
            See My Work
          </a>
          <a href="/about" className="px-8 py-3 border-2 border-white/30 text-white rounded-full hover:border-orange-500 transition-colors">
            About Me
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home