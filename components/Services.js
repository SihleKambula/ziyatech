import style from "../styles/components/Services.module.scss";
import ServiceCard from "./ServiceCard";
import services from "../model/services";

const Services = () => {
  return (
    <>
      <h1 className={style.main_heading}>Services</h1>
      <div className={style.container}>
        {services.map((service) => {
          return (
            <ServiceCard
              key={service.img}
              imgUrl={service.img}
              heading={service.heading}
              paragraph={service.paragraph}
              btnText={service.btnText}
              urlLink={service.urlLink}
            />
          );
        })}
      </div>
    </>
  );
};
export default Services;
