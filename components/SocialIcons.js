import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faFacebook } from "@fortawesome/free-brands-svg-icons";

const SocialIcons = () => {
  return (
    <>
      <a href='https://wa.me/message/WIQN4VY6HP3OJ1' target='blank'>
        <FontAwesomeIcon icon={faWhatsapp} />
      </a>
      <a href='https://m.facebook.com/www.ziyatech.co.za/' target='blank'>
        <FontAwesomeIcon icon={faFacebook} />
      </a>
    </>
  );
};
export default SocialIcons;
