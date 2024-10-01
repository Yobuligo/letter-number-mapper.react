import { error } from "./utils/error";

export const AppConfig = {
  LINK_MY_PAYPAL_ME:
    process.env.REACT_APP_LINK_MY_PAYPAL_ME ??
    error("Error while getting PayPalMe from environment variables"),
  LINK_IMPRINT:
    process.env.REACT_APP_LINK_IMPRINT ??
    error("Error while getting Imprint link from environment variables"),
  LINK_PRIVACY_POLICY:
    process.env.REACT_APP_PRIVACY_POLICY_LINK ??
    error("Error while getting privacy policy link from environment variables"),
};
