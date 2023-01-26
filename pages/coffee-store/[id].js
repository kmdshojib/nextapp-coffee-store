import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"

import cofffeeStoresData from "../../data/coffee-stores.json"
import style from "../../styles/cofee-store.module.css"

import nearMe from "../../public/icons/nearMe.svg"
import places from "../../public/icons/places.svg"
import star from "../../public/icons/star.svg"

export const getStaticProps = async ({ params }) => {
  // const params = staticprops.params
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: process.env.PLACE_API
    }
  };

  const res = await fetch('https://api.foursquare.com/v3/places/search', options)
    .then(response => response.json())
    .then(data => data.results)
  return {

    props: {
      cofffeeStores: res.find(store => {
        console.log(store)
        return store.fsq_id.toString() === params.id
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
const handleUpVoteButton = () => { }
const CoffeeSotre = (props) => {
  const router = useRouter()

  console.log("router", router)

  if (router.isFallback) {
    return <div>Loading...</div>
  }
  console.log(props)
  const { name, imgUrl, id, location } = props.cofffeeStores
  console.log(props.cofffeeStores)

  return (
    <div className={style.layout}>
      <Head>
        <title>{name}</title>
      </Head>
      <div className={`${style.container}`}>
        <div className={style.col1}>
          <div className={style.backToHomeLink}>
            <Link href="/">Back Home</Link>
          </div>
          <div className={` ${style.nameWrapper}`}>
            <p>{name}</p>
          </div>
          <Image src={imgUrl} alt={name} width={600} height={300} className={style.storeImg} />
        </div>
        <div className={`glass ${style.col2}`}>
          <div className={style.iconWrapper}>
            <Image src={nearMe} width="24" height="24" />
            <p className={style.text}>{location.address}</p>
          </div>
          <div className={style.iconWrapper}>
            <Image src={places} width="24" height="24" />
            <p className={style.text}>{location.formatted_address}</p>
          </div>
          <div className={style.iconWrapper}>
            <Image src={star} width="24" height="24" />
            <p className={style.text}>1</p>
          </div>

          <button className={style.upvoteButton} onClick={handleUpVoteButton}>Up Vote</button>
        </div>
      </div>

    </div>
  )
}

export default CoffeeSotre