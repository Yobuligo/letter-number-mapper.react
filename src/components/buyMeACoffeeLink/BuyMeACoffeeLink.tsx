import styles from "./BuyMeACoffeeLink.module.scss";
import { ReactComponent as CoffeeToGoIcon } from "../../assets/coffee_to_go.svg";

import { IBuyMeACoffeeLinkProps } from "./IBuyMeACoffeeLinkProps";
import { style } from "../../utils/style";
import { Link } from "../core/link/Link";
import { AppConfig } from "../../AppConfig";

export const BuyMeACoffeeLink: React.FC<IBuyMeACoffeeLinkProps> = (props) => {
  return (
    <Link
      to={AppConfig.LINK_MY_PAYPAL_ME}
      className={style(styles.buyMeACoffeeLink, props.className)}
      openInNewTab
    >
      <CoffeeToGoIcon className={styles.icon} />
      <div className={styles.text}>
        <div>{"Like it?"}</div>
        <div>{"Buy me a coffee!"}</div>
      </div>
    </Link>
  );
};
