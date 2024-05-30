// @flow strict

import { personalData } from "../../../../utils/data/personal-data";
import axios from 'axios';

async function getBlog(slug) {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BLOGS_API}?username=${personalData.devUsername}/${slug}`);
    return response.data;
  } catch (error) {
    throw new Error("Error al cargar los datos");
  }
}

async function BlogDetails({ params }) {
  const slug = params.slug;
  const blog = await getBlog(slug);

  return <div></div>;
}

export default BlogDetails;
