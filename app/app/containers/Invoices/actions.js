export const fetchData = params => ({
  type: 'FETCH_DATA',
  params,
});

export const fetchDataSuccess = (data, metaData) => ({
  type: 'FETCH_DATA_SUCCESS',
  data,
  metaData,
});
