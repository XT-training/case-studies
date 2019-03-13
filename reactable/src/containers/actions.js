export const fetchData = (fetchData, settings = {}) => ({
  type: 'FETCH_DATA',
  fetchData,
  settings
});

export const fetchDataSuccess = (data, metadata) => ({
  type: 'FETCH_DATA_SUCCESS',
  data,
  metadata
});
