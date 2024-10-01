import { ILinkProps } from "./ILinkProps";

export const Link: React.FC<ILinkProps> = (props) => {
  return props.openInNewTab ? (
    <a
      href={props.to}
      target="_blank"
      rel="noreferrer"
      className={props.className}
    >
      {props.children}
    </a>
  ) : (
    <a href={props.to} className={props.className}>
      {props.children}
    </a>
  );
};
