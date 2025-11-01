import Link from "next/link";

const About = () => {
  return (
    <h1>
      <Link href={"/auth/login"}>Back to home page</Link>
    </h1>
  );
};

export default About;
