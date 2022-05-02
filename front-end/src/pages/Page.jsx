import React, { useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import MyContext from '../context';

function Page() {
  const { loading } = useContext(MyContext);
  const navigate = useNavigate();
  const { page } = useParams();

  useEffect(() => {
    if (!loading) {
      if (page) {
        navigate(`/${page}`);
      } else {
        navigate('/');
      }
    }
  }, [loading, page, navigate]);

  return (
    <div>Page</div>
  );
}

export default Page;
