/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Text, Flex, Box, Input, Button } from '@theme-ui/components';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const Search = () => {
  const [ searchText, setSearchText ] = useState('');
  const handleInput = (e) => {
    setSearchText(e.target.value);
  };
  const openWindow = (e) => {
    e.preventDefault();
    window.open(`https://twitter.com/search?q=${encodeURIComponent(searchText)}%20from%3Aempiricalchina`);
  };
  return (
    <Box>
      <Text sx={{ mb: 2, fontSize: [ 1, 2, 3 ] }}>Find papers we've tweeted about</Text>
      <Flex as="form" onSubmit={openWindow}>
        <Box sx={{ flex: '1 1 auto', mr: 1 }}>
          <Input onChange={handleInput} />
        </Box>
        <Box>
          <Button type="submit" sx={{ ml: 1, ':hover': { opacity: 0.9 }, cursor: 'pointer' }}>
            Search <FontAwesomeIcon icon={faExternalLinkAlt} />
          </Button>
        </Box>
      </Flex>

      <details>
        <summary>Advanced search operators</summary>
        <TwitterOperators />
      </details>
    </Box>
  );
};

const TwitterOperators = () => (
  <table>
    <thead>
      <tr>
        <th>Operator</th>
        <th>Finds tweets...</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>twitter search</td>
        <td>containing both "twitter" and "search". This is the default operator.</td>
      </tr>
      <tr>
        <td>
          <b>"</b>happy hour<b>"</b>
        </td>
        <td>containing the exact phrase "happy hour".</td>
      </tr>
      <tr>
        <td>
          love <b>OR</b> hate
        </td>
        <td>containing either "love" or "hate" (or both).</td>
      </tr>
      <tr>
        <td>
          beer <b>-</b>root
        </td>
        <td>containing "beer" but not "root".</td>
      </tr>
      <tr>
        <td>
          <b>#</b>haiku
        </td>
        <td>containing the hashtag "haiku".</td>
      </tr>
      <tr>
        <td>
          <b>from:</b>alexiskold
        </td>
        <td>sent from person "alexiskold".</td>
      </tr>
      <tr>
        <td>
          <b>to:</b>techcrunch
        </td>
        <td>sent to person "techcrunch".</td>
      </tr>
      <tr>
        <td>
          <b>@</b>mashable
        </td>
        <td>referencing person "mashable".</td>
      </tr>
      <tr>
        <td>
          "happy hour" <b>near:</b>"san francisco"
        </td>
        <td>containing the exact phrase "happy hour" and sent near "san francisco".</td>
      </tr>
      <tr>
        <td>
          <b>near:</b>NYC <b>within:</b>15mi
        </td>
        <td>sent within 15 miles of "NYC".</td>
      </tr>
      <tr>
        <td>
          superhero <b>since:</b>2010-12-27
        </td>
        <td>containing "superhero" and sent since date "2010-12-27" (year-month-day).</td>
      </tr>
      <tr>
        <td>
          ftw <b>until:</b>2010-12-27
        </td>
        <td>containing "ftw" and sent up to date "2010-12-27".</td>
      </tr>
      <tr>
        <td>
          hilarious <b>filter:links</b>
        </td>
        <td>containing "hilarious" and linking to URLs.</td>
      </tr>
      <tr>
        <td>
          news <b>source:"Twitter Lite"</b>
        </td>
        <td>containing "news" and entered via Twitter Lite</td>
      </tr>
    </tbody>
  </table>
);

export default Search;
