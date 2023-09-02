import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const JobDetails = () => {
  const [job, setJob] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchJob = async () => {
      const response = await axios.get(`http://localhost:8000/api/jobs/${id}`);
      setJob(response.data);
    };

    fetchJob();
  }, [id]);

  return (
    <div>
      <h2>{job.title}</h2>
      <p>{job.company}</p>
      {/* Add more job details here */}
    </div>
  );
};

export default JobDetails;