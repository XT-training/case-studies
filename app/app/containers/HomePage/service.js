const getInvoice = () =>
  fetch('https://reqres.in/api/users?page=1&per_page=10').then(response =>
    response.json(),
  );

export default getInvoice;
