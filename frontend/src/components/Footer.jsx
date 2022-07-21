function Footer() {
  const style = {
    borderTop: "1px solid",
    textAlign: "right",
    height: "5vh",
    width: "100%",
  };

  return (
    <div style={style}>
      <div>Footer</div>
      <a href="mailto: asathal.pierre@gmail.com" className="email-link">
        asathal.pierre@gmail.com
      </a>
    </div>
  );
}
export default Footer;
