import style from "../styles/components/ServiceCard.module.scss";
import Image from "next/image";
const ServiceCard = ({ imgUrl, heading, paragraph, btnText, urlLink }) => {
  return (
    <div className={style.container}>
      <div className={style.img_container}>
        <Image
          src={imgUrl}
          alt={imgUrl}
          width={300}
          height={250}
          quality={100}
          layout='responsive'
        />
      </div>
      <div className={style.detail}>
        <div>
          <h3>{heading}</h3>
          <p>{paragraph}</p>
        </div>
        <button>
          <a href={urlLink} target='blank'>
            {btnText}
          </a>
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
