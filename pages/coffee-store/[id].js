import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"

import cofffeeStoresData from "../../data/coffee-stores.json"

export const getStaticProps = ({ params }) => {
  // const params = staticprops.params
  return {
    props: {
      cofffeeStores: cofffeeStoresData.find(store => {
        console.log(store)
        return store.id.toString() === params.id
      })
    }
  }
}

export const getStaticPaths = () => {
  const paths = cofffeeStoresData.map(store => {
    return{
      params: { id: store.id.toString() }
    }
  })
  return {
    paths,
    fallback: true,
  }
}

const CoffeeSotre = (props) => {
  const router = useRouter()

  console.log("router", router)

  if (router.isFallback) {
    return <div>Loading...</div>
  }
  console.log(props)
  const { name, imgUrl, id, neighbourhood, address } = props.cofffeeStores
  console.log(name)

  return (
    <div>
      <Head>
        <title>{name}</title>
      </Head>
      <Link href="/">Back Home</Link>
      <p>{name}</p>
      <p>{address}</p>
      <p>{neighbourhood}</p>
    </div>
  )
}

export default CoffeeSotre