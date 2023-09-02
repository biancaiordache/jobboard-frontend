import axios from 'axios';

export const fetchJobs = () => {
  return (dispatch) => {
    axios.get('http://localhost:8000/api/jobs/')
      .then(response => {
        dispatch({ type: 'FETCH_JOBS', payload: response.data });
      })
      .catch(error => console.log(error));
  };
};