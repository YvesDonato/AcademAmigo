import mail from '../assets/Images/mail-142.png'

function Footer() {
  return(
    <div className="flex justify-center h-28">
      <div className="flex justify-between w-11/12 p-10 rounded-full shadow-lg bg-darkblue items-center">
        <div className="flex items-center">
            <img className="w-8 m-1"src={mail} alt="mail"></img>
        <p className="text-white">AcademAmigo@support.com</p> 
        </div>
        <div className="">
          <ul className="flex">
             <li><a className="m-1 text-white" href="">Privacy Policy</a></li>
            <li><a className="m-1 text-white" href="">Terms & Conditions</a></li>
          </ul>
        </div>
      </div>
    </div> 
  );
}
export default Footer

