import "./Button.css";
type ButtonProps = {
  text: string;
  icon: JSX.Element;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
export const Button = ({ text, icon, onClick }: Partial<ButtonProps>) => {
  return (
    <button className="button-component" onClick={onClick}>
      {text || icon}
    </button>
  );
};
