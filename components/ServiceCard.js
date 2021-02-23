import style from "../styles/components/ServiceCard.module.scss";

const ServiceCard = () => {
  return (
    <div className={style.container}>
      <div className={style.img_container}>
        <img src='assets/img.png' alt='' />
      </div>
      <div className={style.detail}>
        <h3>Heading</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi,
          corrupti neque quia autem, similique cumque
        </p>
        <button>Purchase</button>
      </div>
    </div>
  );
};

export default ServiceCard;
