import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';import { fetchJobs } from '../redux/actions';

const JobList = () => {
  const dispatch = useDispatch();
  const jobs = useSelector(state => state.jobs);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  return (
    <div>
      {jobs.map(job => (
        <div key={job.id}>
          <h2><Link to={`/jobs/${job.id}`}>{job.title}</Link></h2>
          <p>{job.company}</p>
          {/* Add more job details here */}
        </div>
      ))}
    </div>
  );
};

export default JobList;