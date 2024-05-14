import Spline from '@splinetool/react-spline';

function SpineBackground() {
  return(
    <div className="fixed h-screen w-screen z-background">
      <Spline scene="https://prod.spline.design/LVvs5zpZIyyOwSuT/scene.splinecode" />
    </div> 
  );
}
export default SpineBackground; 
