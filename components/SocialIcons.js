import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faFacebook } from "@fortawesome/free-brands-svg-icons";

const SocialIcons = () => {
  return (
    <>
      <a href='#'>
        <FontAwesomeIcon icon={faWhatsapp} />
      </a>
      <a href='#'>
        <FontAwesomeIcon icon={faFacebook} />
      </a>
    </>
  );
};
export default SocialIcons;
