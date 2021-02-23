import style from "../styles/components/ServiceCard.module.scss";

const ServiceCard = ({ imgUrl, heading, paragraph }) => {
  return (
    <div className={style.container}>
      <div className={style.img_container}>
        <img src={imgUrl} alt={imgUrl} />
      </div>
      <div className={style.detail}>
        <h3>{heading}</h3>
        <p>{paragraph}</p>
        <button>Purchase</button>
      </div>
    </div>
  );
};

export default ServiceCard;
