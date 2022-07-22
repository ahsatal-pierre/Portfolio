function Footer() {
  const style = {
    textAlign: "right",
    height: "5vh",
    width: "100%",
  };

  return (
    <div style={style}>
      <div>Footer</div>
      <a href="mailto: asathal.pierre@gmail.com" className="email-link">
        <strong>pierre@gmail.com</strong>
      </a>
    </div>
  );
}
export default Footer;
