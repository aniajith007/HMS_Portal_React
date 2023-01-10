function Footer(props) {
  return (
    <footer className="footer footer-center p-4 bg-base-300 text-base-content fixed">
      <div>
        <p>Designed By {props.content}</p>
      </div>
    </footer>
  );
}

export default Footer;
