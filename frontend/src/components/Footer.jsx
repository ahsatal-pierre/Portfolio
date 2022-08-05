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
        <strong>click here to send me an email </strong>
      </a>
    </div>
  );
}
export default Footer;
