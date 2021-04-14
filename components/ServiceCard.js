import style from "../styles/components/ServiceCard.module.scss";

const ServiceCard = ({ imgUrl, heading, paragraph }) => {
  return (
    <div className={style.container}>
      <div className={style.img_container}>
        <img src={imgUrl} alt={imgUrl} />
      </div>
      <div className={style.detail}>
        <div>
          <h3>{heading}</h3>
          <p>{paragraph}</p>
        </div>
        <button>
          <a href={`https://www.youradsl.co.za/loginbox.php`} target='blank'>
            More Info
          </a>
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
