import Hero from "@components/Hero";
import About from "@components/About";
import Projects from "@components/Projects";

const Home = ({ projects }) => {
  return (
    <>
      <Hero />
      <About />
      <Projects projects={projects} />
    </>
  );
};

export default Home;

export async function getServerSideProps() {
  const query = `*[_type == "Projects"] | order(_createdAt asc) { link, heading, description, "id": slug.current, "image": image.asset->url }`;
  const url = `https://myde3fi0.api.sanity.io/v2021-10-21/data/query/production?query=${encodeURIComponent(
    query
  )}`;
  const result = await fetch(url)
    .then((res) => res.json())
    .catch((err) => console.log(err));
  const projects = result.result;

  if (!projects) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      projects,
    },
  };
}
