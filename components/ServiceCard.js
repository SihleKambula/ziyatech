import style from "../styles/components/ServiceCard.module.scss";

const ServiceCard = ({ imgUrl, heading, paragraph, btnText, urlLink }) => {
  return (
    <div className={style.container}>
      <div className={style.img_container}>
        <img src={imgUrl} alt={imgUrl} width={300} height={250} />
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
