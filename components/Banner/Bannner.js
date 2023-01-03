import style from './banner.module.css'

const Bannner = ({buttonText,handleOnClick}) => {

    return (
        <div className={`${style.container} mt-40 ml-40`}>
            <h1 className={`${style.title} flex mb-5`}><span className={style.title1}>Coffee</span> <span className={style.title2}>Connoisseur</span></h1>
            <p className={`${style.subTitle} mb-5`}>Discover Shop Nareby!</p>
            <button className={style.button} onClick={handleOnClick}>{buttonText}</button>
        </div>
    )
}

export default Bannner