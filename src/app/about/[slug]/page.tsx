import type { FC } from "react";

interface Props {
  params: { slug: string };
}
const AboutSlugPage: FC<Props> = ({ params }) => {
  return <div>SLUG: {params.slug}</div>;
};

export default AboutSlugPage;
