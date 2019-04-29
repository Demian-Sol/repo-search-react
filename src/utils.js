export const debounce = (requestFunction, wait) => {
  let timeout;

  return (searchValue) => {
    const sendRequest = () => {
      timeout = null;
      if (searchValue !== '') requestFunction(searchValue);
    };
    clearTimeout(timeout);

    timeout = setTimeout(sendRequest, wait);
  };
};
