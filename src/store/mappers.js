export const mapResponseToResults = response => {
  const results = response.data.items.map(result => {
    const {
      id,
      full_name: name,
      html_url: url,
      watchers_count: watchersCount,
      stargazers_count: stargazersCount,
    } = result;
    return { id, name, url, watchersCount, stargazersCount };
  });
  return results;
};
