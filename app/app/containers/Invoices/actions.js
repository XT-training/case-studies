export const fetchData = params => ({
  type: 'FETCH_DATA',
  params,
});

export const fetchDataSuccess = (data, metadata) => ({
  type: 'FETCH_DATA_SUCCESS',
  data,
  metadata,
});
