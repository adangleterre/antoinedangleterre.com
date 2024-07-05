type ButtonProps = {
  color: string;
  text: string;
  className?: string;
};

function Button({ color, text, className }: ButtonProps) {
  return <button className={`${[color]} ${className}`}>{text}</button>;
}

export default Button;
