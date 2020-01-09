/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import useSiteMetadata from '@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Donate = ({ children }) => {
  const { siteUrl } = useSiteMetadata();
  const baseUrl = process.env.NODE_ENV === 'development' ? process.env.BASE_URL : siteUrl;
  const redirectToCheckout = async (event) => {
    const stripe = window.Stripe(`${process.env.STRIPE_PUBLIC_KEY}`);

    event.preventDefault();
    const { error } = await stripe.redirectToCheckout({
      items: [ { sku: `${process.env.STRIPE_SKU}`, quantity: 1 } ],
      successUrl: `${baseUrl}/thanks/`,
      cancelUrl: `${baseUrl}/about/`
    });

    if (error) {
      console.warn('Error:', error);
    }
  };

  return (
    <Styled.a href="#" onClick={redirectToCheckout}>
      {children}
      {/* {` `} */}
      {/* <FontAwesomeIcon icon="external-link-alt" size="1x" /> */}
    </Styled.a>
  );
};

export default Donate;
