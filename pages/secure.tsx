import Head from 'next/head'

export async function getStaticProps() {
  return {
    props: {secure: true}
  }
}

export default function Page() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        hi
      </main>
    </div>
  )
}