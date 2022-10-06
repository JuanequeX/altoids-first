import Head from "next/head";
import Image from "next/image"
import bg from "../public/bg.webp"

const about = ({data}) => {
  return (
    <div>
      <Head>
        <title>About</title>
        <meta name="about" content="Mi primer sitio con next.js" />
      </Head>
      <h1>About</h1>
      <p>This is a test of routing on next.js</p>
      <button onClick={() => alert('Test DONE')}>Click me to alert</button>
      <Image src={bg} alt="test" width="2000" height="800" layout="responsive" />

      {JSON.stringify(data)}
    </div>
  );
}

export async function getStaticProps(context) {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json()
  console.log(data)

  return {
    props: {
      data
    }
  }
}

export default about;
