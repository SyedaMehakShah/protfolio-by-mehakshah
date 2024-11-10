import Image from "next/image";
export default function About() {
  return (
    <section className="text-white mt-6 pt-6">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16">
        <Image src="/about.jpg" alt="about" width={500} height={500}></Image>
        <div>
          <h1 className="text-4xl font-bold text-white mt-3 mb-5">About me</h1>
          <p className="text-base lg:text-lg">
             I am a frontend web
            developer with a strong focus on crafting responsive, user-friendly
            websites and web applications. I specialize in modern web
            technologies like HTML, CSS, JavaScript, and TypeScript, and I'm
            experienced with frameworks like Next.js and styling tools like
            Tailwind CSS. With a keen eye for detail and a love for clean,
            efficient code, I strive to create digital experiences that not only
            look great but are easy to use and accessible on all devices.
          </p>
          <div className="flex flex-col mt-8 lg:flex-row">
            <span className="mr-3 font-semibold hover:text-white text-[#ADB7BE] border-b-2 border-purple-600">Skills</span>
            <ul className="flex flex-col m-2 "> 
                <li>Html</li>
                <li>Css</li>
                <li>Javascript</li>
                <li>Typescript</li>
                <li>Next.js</li>
                <li>Tailwind Css</li>
            </ul>
            
            <span className="mr-3 mt-3 font-semibold hover:text-white text-[#ADB7BE] border-b-2 border-purple-600">Experience</span>
            <ul className="m-2">
                <li>Frontend Web Developer (Personal Projects)
                Self-Employed </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
