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
                <Image className={style.cardImage} src={imgUrl} width={260} height={160} />
            </Link>
        </div>
    )
}

export default Card