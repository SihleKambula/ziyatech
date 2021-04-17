import style from "../styles/components/Footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faFacebook } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.business_details}>
        <div className='address'>
          <h3>Business Address</h3>
          <p>
            673 Emhlangeni street
            <br /> Central Western Jabavu <br /> Joahnnesburg
            <br /> 1809 <br />
            On google maps:
            <a
              href='https://www.google.com/maps/place/ZiyaTech+Thabiso/@-26.2418871,27.8739164,15z/data=!4m5!3m4!1s0x0:0x2be7a9d6d7761ea5!8m2!3d-26.2418871!4d27.8739164'
              target='blank'
            >
              click here
            </a>
          </p>
        </div>
        <div className={style.social_media}>
          <h3>Social Media</h3>
          <div>
            <a href='https://wa.me/message/WIQN4VY6HP3OJ1' target='blank'>
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
            <p> +27833631270</p>
          </div>
          <div>
            <a href='https://m.facebook.com/www.ziyatech.co.za/' target='blank'>
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <p>ZiyaTech</p>
          </div>
        </div>
        <div className='business_infor'>
          <h3>Business Information</h3>
          <p>
            Registration Number : 2021/548751/07
            <br /> Enterprise Name : ZiyaTech (Pty) LTD
            <br /> All forms are prescribed by the Minister of Trade and
            <br />
            Industry in terms of section 223 of the Companies Act,
            <br /> 2008 (Act No. 71 of 2008).
          </p>
        </div>
        <div className='partnership'>
          <h3>Partnerships</h3>
          <a href='https://racm.co.za' target='blank'>
            <Image
              src='/assets/racm_logo.webp'
              alt='racm'
              width={50}
              height={50}
              layout='responsive'
            />
          </a>

          <br />
          <a href='https://sihlekambula.com' target='blank'>
            <Image
              src='/assets/k_innovation.webp'
              alt='k innovation'
              width={100}
              height={20}
              quality={100}
              layout='responsive'
            />
          </a>
        </div>
      </div>
      <p>©️Ziyatech 2021</p>
    </footer>
  );
};

export default Footer;
