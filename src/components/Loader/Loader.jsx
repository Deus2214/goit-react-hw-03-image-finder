import { ThreeCircles } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div className="loader-container">
      <ThreeCircles
        height="100"
        width="100"
        color="#303f9f"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor="#303f9f"
        innerCircleColor="#075629"
        middleCircleColor="#4f0e47"
      />
      ;
    </div>
  );
};