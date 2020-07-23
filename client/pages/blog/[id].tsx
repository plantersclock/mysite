import Head from 'next/head'
import { GetServerSideProps } from "next";


interface BGGProps {
  data: any;
}

function Home( {data}: BGGProps) {

  return (
    <div className="container">
      <Head>
        <title>My Test Title</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>{data.title}</h1>
        <div dangerouslySetInnerHTML={{ __html:data.subtitle}}></div>
        
        {data.image == null? <div></div> :
        <img style={{ width: 500}} src={"http://localhost:8000"+data.image.meta.download_url}/>}

        <p>This is the id of this {data.id}</p>
      </main>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<BGGProps> = async ({params}) => {
  // Fetch data from external API
  const res = await fetch(`http://localhost:8000/api/v2/pages/`+params.id)
  const response = await res.json()
  const data = response
  

  // Pass data to the page via props
  return { props: { data } }
}

export default Home