import Head from 'next/head'

export default () => {
  return (
    <div>
      <Head>
        <title>TAMIS</title>
        <meta name="description" content="TAMIS: Accademic Management Information " />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 text-5xl text-primary">
        Hello, World!
      </h1>
    </div>
  )
}
