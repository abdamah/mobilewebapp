// export default function Footer2() {}

// This is clean coding approach to separate concerns in coding

const Footer = () => {
  return (
    <div>
      <h2>Footer Section</h2>
      <p
        style={{
          color: "blue",
          fontSize: 48,
        }}
      >
        copyrighgt
      </p>
    </div>
  );
};
export default Footer;
