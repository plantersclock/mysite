import Head from 'next/head'
import Hello from '../components/hello'
import BGTest from '../components/bgtest'
import { GetServerSideProps } from 'next';
import Link from 'next/link'


interface BGGProps {
  data: any;
}

function Home( {data}: BGGProps) {

  console.log(data)
  return (
    <div className="container">
      <Head>
        <title>My Test Title</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hello name="Matthew"/>
        {data.map(item => <div><Link href="/blog/[id]" as={"/blog/"+item.id}>{item.title}</Link></div>)}
      </main>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<BGGProps> = async () => {
  // Fetch data from external API
  const res = await fetch(`http://localhost:8000/api/v2/pages/`)
  const response = await res.json()
  const data = response.items
  

  // Pass data to the page via props
  return { props: { data } }
}

export default Home