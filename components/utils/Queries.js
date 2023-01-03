const getPostsFromCategories = async (segments) => {
  const query = `{
        categories(where: {name: "${segments}"}) {
      edges {
        node {
          id
          name
        }
      }
      nodes {
        posts(first: 20) {
          edges {
            node {
              title
              content
            }
          }
        }
      }
    }
    }`;

  let data = await fetch(
    "http://wp.fundacionindex.org/graphql?query=" + query,
    {}
  )
    .then((res) => res.json())
    .catch((err) => {});

  return data;
};

const getCategories = async () => {
  const query = `
    {
      categories {
        edges {
          node {
            id
            name
          }
        }
      }
    }
    `;
  const response = await fetch(
    "http://wp.fundacionindex.org/graphql?query=" + query,
    {}
  )
    .then((res) => res.json())
    .catch((err) => {});
  return response;
};

export { getPostsFromCategories, getCategories };
