import React from "react";
import PortableText from "@sanity/block-content-to-react";
import Image from "next/image";

const Badge = ({ children }) => {
  return (
    <span className="flex w-[80px] h-[25px] justify-center items-center text-[#9AE6B4] rounded-sm text-sm mr-4 font-bold bg-[rgba(154,230,180,0.16)] p-1">
      {children}
    </span>
  );
};

const Description = ({ project }) => {
  return (
    <div className="pt-[120px] p-3 flex justify-center">
      <div className="flex-1 max-w-2xl">
        <div>
          <span></span>
        </div>
        <p className="px-1 my-2 text-3xl font-bold font-heading">
          {project.heading}
        </p>
        <PortableText className="px-1" blocks={project.body} />
        {project.link && (
          <div className="flex items-center p-1 mt-[10px]">
            <Badge>Website</Badge>
            <span className="text-sm">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={project.link}
                className="hover:underline"
              >
                {project.link}
              </a>
            </span>
          </div>
        )}
        <div className="flex items-center p-1">
          <Badge>Platform</Badge>
          <span className="text-sm">{project.platform}</span>
        </div>
        <div className="flex items-center p-1 mb-[50px]">
          <Badge>Stack</Badge>
          <span className="text-sm">{project.stack}</span>
        </div>
        <div className="relative w-full h-[200px] mb-[50px] sm:h-[300px] md:h-[400px]">
          <Image
            src={project.image}
            alt={project.title}
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
        </div>
        {/*project.images.map((image, index) => (
          <div
            key={index}
            className="relative w-full h-[250px] mb-[50px] sm:h-[300px] md:h-[400px]"
          >
            <Image
              src={image}
              alt={"Decorative Image"}
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
        ))*/}
      </div>
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

  const query = `*[_type == "Projects" && slug.current == "${slug}"] {
    heading, link, platform, stack, body, "image": image.asset->url,
    "images": gallery[].asset->url
  }`;
  const url = `${process.env.SANITY_URL + encodeURIComponent(query)}`;
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
