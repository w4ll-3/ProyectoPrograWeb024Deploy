// @flow strict
import { personalData } from "../../../../utils/data/personal-data";

async function getBlog(slug) {
  const res = await fetch(
    `https://dev.to/api/articles/${personalData.devUsername}/${slug}`
  );

  if (!res.ok) {
    throw new Error("Error al cargar los datos");
  }

  const data = await res.json();
  return data;
}

async function BlogDetails({ params }) {
  const slug = params.slug;
  const blog = await getBlog(slug);

  return <div></div>;
}

export default BlogDetails;
