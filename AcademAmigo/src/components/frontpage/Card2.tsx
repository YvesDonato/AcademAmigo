import NotePad from '../../assets/Images/NotePad.png';

function Card2() {
  return (
    <div className="m-40 flex flex-wrap justify-center items-center">
      <div className="flex w-2/6 justify-center">
        <img src={NotePad} alt="Robot Helper" className="w-8/12" />
      </div>
      <div className="rounded-3xl bg-medium-darkblue w-2/6 p-10 text-center">
        <h1 className="font-bold text-6xl text-red">Less Studying, Better Grades</h1>
        <p className="text-lg text-white">
          With tools like Practice Quizzes, 
          Flashcards, Study Plans, and more
          features coming soon, take that C-
          and turn it into an A+.
        </p>
      </div>
    </div>
  );
}

export default Card2;
