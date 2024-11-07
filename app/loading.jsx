'use client';
import ClipLoader from 'react-spinners/ClipLoader';

const override = {
  display: 'block',
  margin: '100 auto',
  borderColor: 'red',
};

const LoadingPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <ClipLoader
        color="#36d7b7"
        size={200}
        cssOverride={override}
        aria-label="Loading Spinner"
      />
    </div>
  );
};

export default LoadingPage;
