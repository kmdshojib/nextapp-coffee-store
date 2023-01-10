import Link from "next/link"
import { useRouter } from "next/router"

import cofffeeStoresData from "../../data/coffee-stores.json"

export const getStaticProps = (staticprops) =>{
  const params = staticprops.params
  return {
    props:{
      cofffeeStores:cofffeeStoresData.find(store => {
        console.log(store)
        return store.id === 0
      })
    }
  }
}

export const getStaticPaths = () =>{
  return {
    paths:[{params: {id: "0"}}],
    fallback: false,
  }
}

const CoffeeSotre = (props) => {
  const router = useRouter()

  console.log("router",router)


  console.log(props)

  return (
    <div>CoffeeSotre <Link href="/">Home</Link></div>
  )
}

export default CoffeeSotre