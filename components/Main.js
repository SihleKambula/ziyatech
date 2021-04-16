import style from "../styles/components/Main.module.scss";
import SocialIcons from "./SocialIcons";

const Main = () => {
  return (
    <main className={style.main}>
      <div className={style.about_business}>
        <h1>We Bring the best</h1>
        <p>
          In an age where digital technology has advanced more rapidly than most
          innovations in history it is impartial that businesses are aware and
          brought up to speed. Ziyatech was therefore born to help with the
          elevation, digitalisation and support of small businesses at
          affordable rates.
        </p>
        <button className={style.btn}>
          <a href='#services'>Let's Get You Started</a>
        </button>
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
