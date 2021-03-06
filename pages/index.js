import Head from 'next/head'
import Link from 'next/link'
import { useRef } from "react"

export default () => {

  const mainEl = useRef(null);

  const handleGoToHome = () => {
    mainEl.current.scrollTo(0, 0);
    window.location.href = "#";
  }

  return (
    <div className="h-screen w-screen flex flex-col">
      <Head>
        <title>TAMIS</title>
        <meta name="description" content="TAMIS: Accademic Management Information " />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="h-12 w-screen bg-primary flex items-center px-2">
        <button className="h-full" onClick={handleGoToHome}>
          <img src="/Logo LG NO BG.png" className="object-contain h-full cursor-pointer" />
        </button>

        {/* <div className="flex-grow" />

        <Link href="https://tamis.app/">
          <a className="text-white">Sign In</a>
        </Link> */}
      </header>

      <main className="overflow-y-scroll snap-y snap-proximity lg:snap-mandatory flex-grow scroll-smooth" ref={mainEl}>

        <section className="h-full relative snap-center">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center space-y-4">
            <div>
              <h1 className="text-7xl text-primary">TAMIS</h1>
              <p className="text-lg text-gray-500">Accademic Management Information System</p>
            </div>
            <div className="flex justify-center space-x-2">
              <Link href="#about">
                <a className="rounded px-1 py-0.5 text-lg shadow bg-primary text-white">
                  Learn More
                </a>
              </Link>
              <Link href="#pre-alpha">
                <a className="rounded px-1 py-0.5 text-lg shadow bg-primary text-white">
                  Pre-Alpha
                </a>
              </Link>
            </div>
          </div>

        </section>

        <section className="lg:h-full bg-primary text-white flex snap-start lg:snap-center pt-4 pb-8 lg:pt-0 lg:pb-0" id="about">
          <div className="w-4/5 lg:w-1/2 xl:h-2/3 m-auto lg:grid grid-cols-3 gap-x-8">

            <h1 className="text-4xl font-semibold lg:text-right">About Us</h1>
            <p className="col-span-2 text-justify">
              TAMIS is a modern management information system hoping to revolutionise the way that schools operate.
              Built with a finely tuned combination of both reliable, well-proven software architecture as well as new, innovative solutions, TAMIS aims to change the game with its shared goals in both usability and efficiency.
            </p>

            <h2 className="text-3xl lg:text-right mt-4 lg:mt-0">Who Are We?</h2>
            <div className="col-span-2 flex flex-col">
              <p className="text-justify">
                I started developing TAMIS in late 2021.
                Having recently starting to work in a school and having sat my A-Levels the previous summer I had expirience of other platforms as both a student and a member of staff.
                Frustrated with some of the floors of other solutions I had a moan in the staff room one day and got told to "make one myself".
                So I did!
              </p>
              <em className="font-light text-right">Henry Bersey, Creator of TAMIS</em>
            </div>

            <h2 className="text-3xl lg:text-right mt-4 lg:mt-0">What's Next?</h2>
            <div className="col-span-2 flex flex-col">
              <p className="text-justify">
                Currently, TAMIS is in the process of implementing the final stages of development before begging the first stage of user testing, Pre-Alpha v0.1.0.
                Additionally, we are in the process of becoming a registered, limited, company as well as doing lots of boring legal stuff like trademarking, copywriting and all that jazz.
                Most importantly the TAMIS team are excited about the future of what started as a project but is now forming into a reality.
              </p>
              <Link href="#pre-alpha">
                <a className="text-right lg:pt-2 font-medium">Read More About Pre-Alpha.</a>
              </Link>
            </div>
          </div>
        </section>

        <section className="h-full flex snap-center text-gray-500" id="pre-alpha">
          <div className="m-auto w-4/5 lg:w-2/5 text-center flex flex-col space-y-2">
            <h2 className="text-3xl text-black mb-2">User Testing Is Starting Soon!</h2>
            <p className="mx-auto">
              A closed Pre-Alpha will start within the next two months.
              In this first iteration of testing we'll be focusing on the pupil database, user system and the initial design and feel of the TAMIS Staff Portal.
            </p>
            <p>
              Pre-Alpha v0.1.0 is invite only for the most part but if you wish to be considered please contact Henry Bersey at <Link href="mailto:Henry.Bersey@tamisapp.com"><a className="hover:text-primary">Henry.Bersey@tamisapp.com</a></Link>.
            </p>
          </div>
        </section>

      </main>

    </div >
  )
}
