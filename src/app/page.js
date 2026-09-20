import Home from "@/components/Home.js";

export const metadata = {
  title: "Josiah Blanding - Full Stack Developer",
  description:
    "Full stack software developer specializing in React, Next.js, and modern web development.",
  alternates: {
    canonical: "/",
  },
};

export default function Render() {
  return (
    <>
      <Home />
    </>
  );
}
