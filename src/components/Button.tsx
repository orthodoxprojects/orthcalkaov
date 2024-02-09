interface Props {
  children: any;
  onClick: () => void;
}

const Button = ({ children, onClick }: Props) => {
  return (
    <button className="btn btn-ghost text-xl p-0" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
