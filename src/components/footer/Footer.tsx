import { IFooterProps } from "./IFooterProps";
import styles from "./Footer.module.scss";
import { BuyMeACoffeeLink } from "../buyMeACoffeeLink/BuyMeACoffeeLink";
import { Link } from "../core/link/Link";
import { AppConfig } from "../../AppConfig";

export const Footer: React.FC<IFooterProps> = (props) => {
  return (
    <div className={styles.footer}>
      <div className={styles.links}>
        <Link to={AppConfig.LINK_IMPRINT} className={styles.link}>
          Imprint
        </Link>
        <Link to={AppConfig.LINK_PRIVACY_POLICY} className={styles.link}>
          Privacy Policy
        </Link>
      </div>
      <BuyMeACoffeeLink />
    </div>
  );
};
