export default function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-zinc-900 border-t border-white/10 pt-16 pb-8 text-center">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-4xl font-bold font-outfit mb-4">Let&apos;s Connect</h2>
        <p className="text-zinc-400 mb-8">
          I&apos;m currently looking for new opportunities in AI, Data Science, and technical instruction. My inbox is always open.
        </p>
        <a 
          href="mailto:abdelghanymosap@gmail.com" 
          className="inline-block border-2 border-secondary text-white font-bold font-outfit px-8 py-3 rounded-full hover:bg-secondary/10 transition-colors"
        >
          Say Hello
        </a>
        
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col items-center gap-4">
          <p className="text-zinc-500 text-sm">
            &copy; {year} Mosap Abdel-Ghany. Built with passion &amp; Next.js.
          </p>
        </div>
      </div>
    </footer>
  );
}
