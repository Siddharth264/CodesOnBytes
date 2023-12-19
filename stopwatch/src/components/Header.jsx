import { Avatar } from "@radix-ui/themes";
import myPhoto from '../assets/mypic.jpg'
import myResume from '../assets/PersonalResume-1.pdf'
function Header() {
  return (
    <div className=" flex justify-between items-center p-3 text-xl ">
      <div className="text-orange-600 text-2xl font-extrabold lg:ml-9 p-3">
        my<span className="text-blue-500">Watch</span>
      </div>

      <div className="mr-9 flex gap-4 items-center">
      <a className="text-blue-500 font-extrabold mr-6 hidden lg:block" href={myResume} download="Resume.pdf">Download Resume</a>
      <a className="text-blue-500 font-extrabold lg:mr-6 lg:hidden" href={myResume} download="Resume.pdf">Download</a>
        <button className="text-orange-600 font-extrabold hidden md:block"><a href="">Hire Siddharth!</a></button>
          <Avatar
            src={myPhoto }
            radius="full"
            size="4"
            fallback="S"
          />
      </div>
    </div>
  );
}
export default Header;
