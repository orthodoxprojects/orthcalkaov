interface Props {
  styleBtn?: React.CSSProperties;
  children: React.ReactNode;
  onClick: () => void;
}

const Button = ({ children, styleBtn, onClick }: Props) => {
  return (
    <button
      className="btn btn-ghost text-xl p-0"
      style={styleBtn}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
