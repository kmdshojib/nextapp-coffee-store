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

export const getStaticPaths = ({ params }) => {
  return {
    paths: [{ params: { id: "0" } }],
    fallback: true,
  }
}

const CoffeeSotre = (props) => {
  const router = useRouter()

  console.log("router", router)

  if (router.isFallback) {
    return <div>Loadind...</div>
  }
  console.log(props)

  return (
    <div>CoffeeSotre <Link href="/">Home</Link></div>
  )
}

export default CoffeeSotre