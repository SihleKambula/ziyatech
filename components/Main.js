import style from "../styles/components/Main.module.scss";
import SocialIcons from "./SocialIcons";

const Main = () => {
  return (
    <main className={style.main}>
      <div className={style.about_business}>
        <h1>We Bring the best</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          quaerat animi rem, minima quam beatae odit doloremque tempore
          necessitatibus veniam reiciendis error, maiores aliquid, a aliquam
          corporis. Obcaecati, laborum autem.
        </p>
        <button className={style.btn}>Get Start</button>
        <div className={style.social_media}>
          <SocialIcons />
        </div>
      </div>
      <div className={style.img_container}>
        <img src='assets/Asset 1.svg' alt='main image' />
      </div>
    </main>
  );
};
export default Main;
