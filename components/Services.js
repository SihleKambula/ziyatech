import style from "../styles/components/Services.module.scss";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className={style.container}>
      <ServiceCard />
      <ServiceCard />
      <ServiceCard />
    </div>
  );
};
export default Services;
