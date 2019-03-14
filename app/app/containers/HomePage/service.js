const getInvoice = (params, callback) => {
  const url = new URL('http://localhost:3000/api/invoice');
  const searchParams = Object.assign(
    {},
    {
      startindex: 0,
      itemsperpage: 10,
    },
    params,
  );
  url.search = new URLSearchParams(searchParams);
  fetch(url).then(response => callback(response.json()));
};

export default getInvoice;
