/** @jsx jsx */
import { jsx } from 'theme-ui';
// import { Link } from 'gatsby';
import Layout from '@lekoarts/gatsby-theme-minimal-blog/src/components/layout';
import Hero from '../texts/hero';
import Bottom from '../texts/bottom';
// import Title from '@lekoarts/gatsby-theme-minimal-blog/src/components/title';
// import Listing from '@lekoarts/gatsby-theme-minimal-blog/src/components/listing';
// import List from '@lekoarts/gatsby-theme-minimal-blog/src/components/list';
import useSiteMetadata from '@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata';
// import replaceSlashes from '@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes';
import Search from '../../../components/search';

type PostsProps = {
  posts: {
    slug: string;
    title: string;
    date: string;
    tags?: {
      name: string;
      slug: string;
    }[];
  }[];
};

const Homepage = ({ posts }: PostsProps) => {
  // const { basePath, blogPath } = useSiteMetadata();

  return (
    <Layout>
      <section sx={{ mb: [ 2, 3, 4 ], p: { fontSize: [ 1, 2, 3 ] } }}>
        <Hero />
      </section>
      <section sx={{ mb: [ 2, 3, 4 ] }}>
        <Search />
      </section>
      {/* <Title text="Latest Posts">
        <Link to={replaceSlashes(`/${basePath}/${blogPath}`)}>Read all posts</Link>
      </Title>
      <Listing posts={posts} showTags={false} />
      <List> */}
      <Bottom />
      {/* </List> */}
    </Layout>
  );
};

export default Homepage;
