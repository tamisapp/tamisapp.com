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
        <Link href="#">
          <img src="/Logo LG NO BG.png" className="object-contain h-full cursor-pointer" />
        </Link>

        <div className="flex-grow" />

        <Link href="https://tamis.app/">
          <a className="text-white">Sign In</a>
        </Link>
      </header>

      <main className="overflow-y-scroll flex-grow">

        <section className="h-full relative">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-8 text-center">
            <h1 className="text-7xl text-primary">TAMIS</h1>
            <p className="text-lg text-gray-500">Accademic Management Information System</p>
          </div>

        </section>

        <section className="h-full bg-primary">

        </section>

      </main>

    </div>
  )
}
