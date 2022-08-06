function Footer() {
  const style = {
    textAlign: "right",
    height: "5vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
  };

  return (
    <div style={style}>
      <div>Footer</div>
      <a href="mailto: asathal.pierre@gmail.com" className="email-link">
        <strong>click here to send me an email </strong>
      </a>
      <a
        href="https://www.linkedin.com/in/pierre-asathal/"
        className="email-link"
        target="_blank"
        rel="noreferrer"
      >
        <strong>click here to Linkedin </strong>
      </a>
    </div>
  );
}
export default Footer;
