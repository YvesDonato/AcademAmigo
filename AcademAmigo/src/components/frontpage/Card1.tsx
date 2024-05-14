import Robot from '../../assets/Images/Robot.png'

function Card1() {
  return (
    <div className="m-40 mt-0 flex flex-wrap justify-center items-center">
      <div className="rounded-3xl bg-medium-darkblue w-2/6 p-10 text-center">
        <h1 className="font-bold text-6xl text-red">Having A Hard Time Studying?</h1>
        <p className="text-lg text-white">
          AcademAmigo is for students made by students.
          We know studying can be hard sometimes, this service
          aims to take some load off your shoulders.
        </p>
      </div>
      <div className="flex w-2/6 justify-center">
        <img src={Robot} alt="Robot" className="w-8/12" />
      </div>
    </div>
  );
}

export default Card1;
