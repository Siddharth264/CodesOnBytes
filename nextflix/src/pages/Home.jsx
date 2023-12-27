import Img from "../assets/home_background.jpg";
import NetflixLogo from "../assets/Netflix.png";
import Lang from "../assets/Lang.svg";
import Next from "../assets/Next.svg";
import Accordian from "../components/Home/Accordian";
export default function Home() {
  return (
    <>
      <div className="bg-gradient-to-t from-black/[.9] via-black/[.5] to-black/[.8] relative border-b-8 border-black/[0.3]">
        <img
          className="h-[30rem] md:h-[32rem] lg:h-[44rem] w-full relative -z-10 object-cover "
          src={Img}
          alt=""
        />
        <div className="absolute w-full lg:w-[90%] lg:mx-[5%]  text-white top-0  flex justify-between items-center p-1">
          <img className="w-28 lg:w-44 xl:w-52 m-2" src={NetflixLogo} alt="" />
          <div className="flex gap-2 mr-7">
            <button className="flex border border-gray-600 rounded-md items-center">
              <span className="hidden lg:block text-lg pl-3">English</span>
              <img
                className="bg-transparent px-3 py-[0.5rem] w-[2.6rem] "
                src={Lang}
                alt="Japani akshar"
              />
            </button>
            <button className="text-sm lg:text-lg bg-[#e50914] w-20 lg:w-24 lg:h-12  rounded-sm flex justify-center items-center font-semibold">
              Sign In
            </button>
          </div>
        </div>

        <div className="flex absolute top-[120px] w-full justify-center lg:top-[200px] ">
          <div className="text-center   text-white space-x-0.5 flex flex-col items-center gap-4">
            <span className=" text-[32px] font-bold leading-tight md:pt-9 lg:text-[40px]">
              Enjoy big movies, hit series and more from ₹149.
            </span>
            <span className="text-[18px] md:text-[20px] lg:text-[28px]">
              Join today. Cancel anytime.
            </span>
            <span className="text-lg lg:text-[20px]">
              Ready to watch? Enter your email to create or restart your
              membership.
            </span>
            <div className=" flex flex-col md:flex-row md:pt-6 items-center gap-3">
              <input
                className="w-96 p-3 md:p-4 md:w-[22rem] rounded-md bg-black/[.5] border border-gray-600 outline-none "
                type="text"
                placeholder="Email Address"
              />
              <button className="font-bold md:text-xl p-3 md:p-[12px] w-40 md:w-48 bg-[#e50914] rounded-md flex gap-2 justify-center items-center">
                Get Started <img className="w-6 md:w-8" src={Next} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black w-full  flex flex-col lg:flex-row lg:justify-center items-center border-b-8 border-gray-900/[1.0] md:pb-9">
        <div className="flex flex-col mx-auto items-center lg:items-start gap-4 pt-9 lg:pl-9">
          <span className="text-white text-[32px] font-bold lg:text-[3rem]">
            Enjoy on your TV
          </span>
          <span className="text-white text-center lg:text-left text-[18px] lg:text-[1.4rem]">
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </span>
        </div>
        <div className="relative xl:max-w-[700px]">
          <img
            className="w-[450px] md:w-[700px] lg:w-[990px] p-4  z-10"
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
            alt="tvimage"
          />

          <video
            autoPlay
            loop
            className="absolute top-[84px] left-[73px] md:left-[100px] md:top-[110px] lg:left-[80px] lg:top-[90px] xl:left-[100px] w-[300px] md:w-[500px] lg:w-[450px] xl:w-[520px] -z-60 "
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
          ></video>
        </div>
      </div>
      <div className="bg-black w-full flex flex-col lg:flex-row-reverse items-center pb-[36px] border-b-8 border-gray-900/[1.0]">
        <div className="flex flex-col flex-1  mx-auto justify-center items-center gap-4 pt-9 ">
          <span className="text-white text-[32px] lg:text-[36px] xl:text-[44px] font-bold text-center md:pt-5">
            Download your shows to watch offline
          </span>
          <span className="text-white text-center text-[18px] lg:text-[20px] xl:text-[26px]">
            Save your favourites easily and always have something to watch.
          </span>
        </div>
        <div className="relative">
          <img
            className="w-[450px] md:w-[680px] xl:w-[750px] p-4 z-10"
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
            alt="tvimage"
          />
          <div className="absolute top-[250px] left-[90px] md:top-[370px] md:left-[120px] z-40">
            <div className="h-16 flex  md:w-[440px] md:h-[85px] xl:w-[500px] xl:h-[100px] border-2 border-gray-500 p-2 rounded-xl bg-black items-center gap-4">
              <img
                className="w-8 pl-1 md:w-14 md:ml-1"
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
                alt=""
              />
              <div className="flex flex-col justify-center w-full md:ml-2">
                <span className="text-white text-sm font-bold md:text-[16px] xl:text-[22px]">
                  Stranger Things
                </span>
                <span className="text-blue-600 text-xs md:text-sm xl:text-[18px] xl:pt-2">
                  Downloading...
                </span>
              </div>

              <img
                className="w-14 ml-6 float-right"
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black w-full flex flex-col lg:flex-row items-center border-b-8 border-gray-900/[1.0] md:pt-5 pb-9">
        <div className="flex flex-col flex-1 mx-auto justify-center items-center gap-4 pt-9 ">
          <span className="text-white text-[32px] lg:text-[36px] xl:text-[44px] text-center font-bold text">
            Watch everywhere
          </span>
          <span className="text-white text-center text-[18px] lg:text-[20px] xl:text-[26px]">
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </span>
        </div>
        <div className="relative">
          <img
            className="w-[450px] md:w-[680px] lg:w-[520px] xl:w-[650px] p-4  z-10"
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
            alt="tvimage"
          />
          <div>
            <video
              autoPlay
              loop
              className="absolute top-[55px] left-[90px] md:left-[120px]  w-[260px] md:w-[420px] lg:w-[300px] xl:w-[400px] -z-60"
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
            ></video>
          </div>
        </div>
      </div>
      <div className="bg-black w-full flex flex-col xl:flex-row-reverse items-center border-b-8 border-gray-900/[1.0] md:pt-5 pb-9">
        <div className="flex flex-col flex-1 mx-auto justify-center items-center gap-4 pt-9 ">
          <span className="text-white text-[32px] lg:text-[36px] xl:text-[44px] font-bold text-center text">
            Create profiles for kids
          </span>
          <span className="text-white text-center text-[18px] lg:text-[20px] xl:text-[26px]">
            Send children on adventures with their favourite characters in a
            space made just for them—free with your membership.{" "}
          </span>
        </div>
        <div className="relative">
          <img
            className="w-[450px] md:w-[680px] p-4  z-10"
            src="https://occ-0-2164-3466.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d"
            alt="tvimage"
          />
        </div>
      </div>

      <div className="bg-black w-full flex flex-col items-center border-b-8 border-gray-900/[1.0] pb-9">
        <div className="flex flex-col max-w-[440px] md:max-w-[700px] mx-auto justify-center items-center gap-4 pt-9 ">
          <span className="text-white text-[32px] text-center font-bold text">
            Frequently Asked Questions
          </span>
        </div>
        <div className="w-full flex flex-col gap-[.6rem] my-5">
          <Accordian title="What is Netflix?" />
          <Accordian title="How much does Netflix cost?" />
          <Accordian title="Where can I watch?" />
          <Accordian title="How do I cancel" />
          <Accordian title="What can I watch on Netflix?" />
          <Accordian title="Is Netflix good for kids?" />
        </div>
        <div className="flex flex-col max-w-[440px] md:max-w-[700px]  mx-auto justify-center items-center gap-4 pt-4 pb-4">
          <span className="text-white text-center text-[18px]">
            Ready to watch? Enter your email to create or restart your
            membership.
          </span>
          <div className=" flex flex-col md:flex-row md:pt-6 items-center gap-3">
            <input
              className="w-96 p-3 md:p-4 md:w-[22rem] rounded-md bg-black/[.5] border border-gray-600 outline-none "
              type="text"
              placeholder="Email Address"
            />
            <button className="text-white font-bold md:text-xl p-3 md:p-[12px] w-40 md:w-48 bg-[#e50914] rounded-md flex gap-2 justify-center items-center">
              Get Started <img className="w-6 md:w-8" src={Next} alt="" />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-black  px-9 text-gray-200 font-light w-full flex flex-col  pb-3">
        <div className="w-full my-5 ">
          <div className="pb-5">
            <span className="">
              Questions? Call{" "}
              <span className=" pt-9 underline underline-offset-3">
                000-800-919-1694
              </span>
            </span>
          </div>
          <div className="">
            <ul className="flex flex-col h-[12rem] flex-wrap gap-3 lg:gap-5 xl:gap-6 text-[14px] underline underline-offset-2 ">
              <li>FAQ</li>
              <li>Account</li>
              <li>Investor Relations</li>
              <li>Ways to watch</li>
              <li>Privacy</li>
              <li>Corporate Information</li>
              <li>Speed Test</li>
              <li>Only on Netflix</li>
              <li>Help Center</li>
              <li>Media Center</li>
              <li>Jobs</li>
              <li>Terms of Use</li>
              <li>Cookie Preferences</li>
              <li>Contact Us</li>
              <li>Legal Notices</li>
            </ul>
          </div>
          <button className="flex gap-2 my-5  border border-gray-400 w-[6rem] px-2 py-1 rounded-md font-normal ">
            <img className="" src={Lang} alt="" />
            <span>English</span>
          </button>
          <span className="text-sm font-light ">Netflix India</span>
        </div>
      </div>
    </>
  );
}
