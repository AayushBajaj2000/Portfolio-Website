import React from "react";
import { useRouter } from "next/router";

const Description = ({ project }) => {
  return (
    <div className="pt-[90px] p-3">
      <div>{JSON.stringify(project)}</div>
    </div>
  );
};

export default Description;

export async function getServerSideProps(context) {
  // get slug from context
  const { slug } = context.query;

  if (!slug) {
    return {
      notFound: true,
    };
  }

  const query = `*[_type == "Projects" && slug.current == "${slug}"]`;
  const url = `https://myde3fi0.api.sanity.io/v2021-10-21/data/query/production?query=${encodeURIComponent(
    query
  )}`;
  const result = await fetch(url)
    .then((res) => res.json())
    .catch((err) => console.log(err));
  const project = result.result[0];

  if (!project) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      project,
    }, // will be passed to the page component as props
  };
}
