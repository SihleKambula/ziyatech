import style from "../styles/components/Form.module.scss";
import SocialIcons from "./SocialIcons";

const Form = () => {
  return (
    <div className={style.form}>
      <h1>Get In Touch</h1>
      <div className={style.container}>
        <p>Have a question? My inbox is always open.</p>

        <a
          href='mailto:thabiso@ziyatech.co.za'
          target='blank'
          className={style.btn}
        >
          Email Me
        </a>
        <SocialIcons />
      </div>
    </div>
  );
};

export default Form;
