import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"

import cofffeeStoresData from "../../data/coffee-stores.json"
import style from "../../styles/cofee-store.module.css"

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
    return {
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
    <div className={style.layout}>
      <Head>
        <title>{name}</title>
      </Head>
      <div className={style.container}>
        <div className={style.col1}>
          <div className={style.backToHomeLink}>
            <Link href="/">Back Home</Link>
          </div>
          <div className={style.nameWrapper}>
          <p>{name}</p>
          </div>
          <Image src={imgUrl} alt={name} width={600} height={300} className={style.storeImg} />
        </div>
        <div className={style.col2}>
          <p>{address}</p>
          <p>{neighbourhood}</p>
        </div>
      </div>

    </div>
  )
}

export default CoffeeSotre