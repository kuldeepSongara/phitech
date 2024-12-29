type FooterProps = {
  className?: string;
};

const Footer = ({ className }: FooterProps) => {
  return <div className={`font-bold text-9xl ${className}`}>Footer</div>;
};

export default Footer;
