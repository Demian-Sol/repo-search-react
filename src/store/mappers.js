export const mapResponseToResults = response => {
  const results = response.data.items.map(result => {
    const {
      full_name: name,
      html_url: url,
      watchers_count: watchersCount,
      stargazers_count: stargazersCount,
    } = result;
    return { name, url, watchersCount, stargazersCount };
  });
  return results;
};
