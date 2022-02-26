import Head from 'next/head'
import Link from 'next/link'

export default () => {
  return (
    <div className="h-screen w-screen flex flex-col">
      <Head>
        <title>TAMIS</title>
        <meta name="description" content="TAMIS: Accademic Management Information " />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="h-12 w-screen bg-primary flex items-center px-2">
        <Link href="#home">
          <img src="/Logo LG NO BG.png" className="object-contain h-full cursor-pointer" />
        </Link>

        <div className="flex-grow" />

        <Link href="https://tamis.app/">
          <a className="text-white">Sign In</a>
        </Link>
      </header>

      <main className="overflow-y-scroll flex-grow scroll-smooth">

        <section className="h-full relative" id="home">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center space-y-4">
            <div>
              <h1 className="text-7xl text-primary">TAMIS</h1>
              <p className="text-lg text-gray-500">Accademic Management Information System</p>
            </div>
            <div className="flex justify-center space-x-2">
              <Link href="#about">
                <a className="border border-primary rounded text-gray-600 px-1 py-0.5 text-lg hover:bg-primary/5">
                  Learn More
                </a>
              </Link>
              <Link href="#pre-alpha">
                <a className="border border-primary rounded text-gray-600 px-1 py-0.5 text-lg hover:bg-primary/5">
                  Pre-Alpha
                </a>
              </Link>
            </div>
          </div>

        </section>

        <section className="h-full bg-primary text-white flex" id="about">
          <div className="w-1/2 h-2/3 m-auto grid grid-cols-3 gap-x-8">

            <h1 className="text-4xl font-semibold text-right">About Us</h1>
            <p className="col-span-2 text-justify">
              TAMIS is a modern management information system hoping to revolutionise the way that schools operate.
              Built with a finely tuned combination of both reliable, well-proven software architecture as well as new, innovative solutions, TAMIS aims to change the game with its shared goals in both usability and efficiency.
            </p>

            <h2 className="text-3xl text-right">Who Are We?</h2>
            <div className="col-span-2 flex flex-col">
              <p className="text-justify">
                I started developing TAMIS in late 2021.
                Having recently starting to work in a school and having sat my A-Levels the previous summer I had expirience of other platforms as both a student and a member of staff.
                Frustrated with some of the floors of other solutions I had a moan in the staff room one day and got told to "make one myself".
                So I did!
              </p>
              <em className="font-light text-right">Henry Bersey, Creator of TAMIS</em>
            </div>

            <h2 className="text-3xl text-right">What's Next?</h2>
            <p className="col-span-2 text-justify">
              Currently, TAMIS is in the process of implementing the final stages of development before begging the first stage of user testing, Pre-Alpha v0.1.0.
              Additionally, we are in the process of becoming a registered, limited, company as well as doing lots of boring legal stuff like trademarking, copywriting and all that jazz.
              Most importantly the TAMIS team are excited about the future of what started as a project but is now forming into a reality.  
            </p>
          </div>

        </section>

      </main>

    </div>
  )
}
