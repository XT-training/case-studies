const getInvoice = params => {
  const url = new URL('http://localhost:3000/mockData/invoice.json');
  const searchParams = Object.assign(
    {},
    {
      startindex: 0,
      itemsperpage: 10,
    },
    params,
  );
  url.search = new URLSearchParams(searchParams);
  return fetch(url).then(response => response.json());
};

export default getInvoice;
