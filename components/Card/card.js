import Image from "next/image"
import Link from "next/link"
import style from "./card.module.css"

const Card = ({ title, imgUrl, href }) => {
    return (
        <div className={`glass ${style.container}`}>
            <Link className={style.cardLink} href={href}>
                <div className={style.cardHeaderWrapper}>
                    <h2 className={style.cardHeader}>{title}</h2>
                </div>
                <Image className={style.cardImage} src={imgUrl} src={
                    imgUrl ||
                    "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
                } width={260} height={160} />
            </Link>
        </div>
    )
}

export default Card