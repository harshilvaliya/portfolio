// "use client";

// import Image from "next/image";
// import Vijay from "../../public/asset/vijay.jpg";
// import "remixicon/fonts/remixicon.css";
// export default function Hero() {
//   return (
//     <>
//       <div id="wrapper" className="w-100vw h-100vh bg-[#E6E6E1] text-[#1C1C1A]">
//         <div
//           id="nav"
//           className="w-full h-[28vh] flex justify-between md:w-full md:h-[26vh]  lg:w-full lg:h-[12vh] lg:flex lg:items-center lg:justify-between lg:px-12"
//         >
//           <div
//             id="logo"
//             className="flex flex-col items-start px-6 py-3 md:flex-row  md:gap-10  md:flex md:px-6 md:py-3 lg:flex lg:items-end  lg:gap-4 lg:px-0 lg:py-0"
//           >
//             <h4 className="text-2xl font-bold md:text-3xl md:font-bold lg:text-3xl lg:font-bold hover:cursor-pointer">
//               <a href="/">
//                 hv<sup>&copy;</sup>
//               </a>
//             </h4>
//             <h4 className="text-base flex md:items-end md:text-lg md:font-medium md:w-full lg:text-lg lg:font-normal lg:ml-8 text-[#1c1c1acb]">
//               ( Jr. Frontend Developer )
//             </h4>
//           </div>
//           <div
//             id="nav-links"
//             className="flex flex-col items-start px-6 py-3 md:py-2 md:px-7   md:items-end  md:w-[30%] lg:flex lg:flex-row lg:justify-end lg:px-0 lg:py-0 lg:w-[40%]  lg:gap-3 lg:text-base lg:font-normal "
//           >
//             <a href="#skills">Skills, </a>
//             <a href="#projects">Projects, </a>
//             <a href="#experience">Experience, </a>
//             <a href="#about">About, </a>
//             <a href="#contact">Contact</a>
//           </div>
//         </div>
//         <div
//           id="hero-txt"
//           className=" w-full text-6xl  font-bold px-6 md:h-[25dvh] md:flex md:justify-center md:items-center md:px-0 md:py-0 md:text-[80px] lg:w-full lg:h-[30vh] lg:top-[20%] lg:flex lg:items-center lg:justify-center uppercase lg:text-9xl lg:font-bold lg:tracking-[0.41rem]"
//         >
//           <h1>
//             Harshil Valiya<sup>&copy;</sup>
//           </h1>
//         </div>
//         <div
//           id="hero-btm"
//           className=" lg:w-full lg:h-[58vh] lg:flex lg:items-center lg:justify-between"
//         >
//           <div
//             id="abt-cta"
//             className=" w-full px-6 py-3 text-start text-xl font-medium md:text-2xl md:font-normal lg:w-1/3 lg:h-full lg:flex lg:flex-col lg:px-12 lg:items-start lg:justify-center lg:text-2xl lg:font-normal"
//           >
//             <h3>Crafting engaging Frontend experiences for websites.</h3>
//             <div
//               id="socials"
//               className="flex items-center justify-strat mt-3 lg:gap-6 lg:mt-6"
//             >
//               <a
//                 className="bg-[#1C1C1A] text-[#E6E6E1] text-sm font-normal px-3 py-1 rounded-full flex items-center justify-center gap-2 lg:text-base lg:font-medium lg:px-6 lg:py-2 lg:flex lg:items-center lg:justify-center lg:gap-2 lg:rounded-full lg:cursor-pointer"
//                 href="/asset/resume/harshil_valiya_resume.pdf"
//                 download
//               >
//                 Resume
//                 <i className="ri-arrow-down-line"></i>
//               </a>
//             </div>
//           </div>
//           <div
//             id="pfp"
//             className=" h-[30dvh] w-full md:h-[60dvh]   flex justify-center items-center lg:w-1/3 lg:h-full lg:flex lg:items-center lg:justify-center"
//           >
//             <Image
//               src={Vijay}
//               alt="pic"
//               height={1000}
//               width={1000}
//               className="h-[90%] w-[95%] object-cover md:object-center object-top lg:object-center rounded-xl"
//             />
//           </div>
//           <div
//             id="looking-job"
//             className="w-full px-6 py-3 text-start text-sm font-normal lg:w-1/3 lg:h-full lg:flex lg:flex-col lg:items-end lg:justify-end lg:pb-6 lg:px-12 lg:text-xl lg:font-normal lg:text-end"
//           >
//             <audio src="/asset/audio/long.mp3" id="audio"></audio>
//             <Image
//               src="/asset/images/gramophone.png"
//               alt="r"
//               height={1000}
//               width={1000}
//               className="hidden lg:block w-[100px] h-[100px] object-cover object-top cursor-pointer"
//               onMouseEnter={() => {
//                 const audio =
//                   document.querySelector<HTMLAudioElement>(
//                     "#looking-job audio"
//                   );
//                 if (audio) audio.play();
//               }}
//               onMouseLeave={() => {
//                 const audio =
//                   document.querySelector<HTMLAudioElement>(
//                     "#looking-job audio"
//                   );
//                 if (audio) audio.pause();
//               }}
//             />
//             <h6>
//               I&apos;m open to opportunities as a <br />
//               <span className="uppercase text-lg font-medium lg:text-2xl lg:font-semibold">
//                 fresher{" "}
//                 <span className="lowercase font-normal opacity-60">or</span>{" "}
//                 freelancer
//               </span>
//             </h6>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

"use client";

import Image from "next/image";
import Vijay from "../../public/asset/vijay.jpg";
import "remixicon/fonts/remixicon.css";

export default function Hero() {
  return (
    <main>
      <div id="hero-wrapper" className="bg-[#E6E6E1] text-[#1C1C1A]">
        <div
          id="nav"
          className="w-full h-[28vh] flex justify-between
                     md:w-full md:h-[26vh]
                     lg:w-full lg:h-[12vh] lg:flex lg:items-center lg:justify-between lg:px-12"
        >
          <div
            id="logo"
            className="flex flex-col items-start px-6 py-3
                       md:flex-row md:gap-10 md:flex md:px-6 md:py-3
                       lg:flex lg:items-end lg:gap-4 lg:px-0 lg:py-0"
          >
            <h4
              className="text-2xl font-bold hover:cursor-pointer
                           md:text-3xl md:font-bold
                           lg:text-3xl lg:font-bold"
            >
              <a href="/">
                hv<sup>&copy;</sup>
              </a>
            </h4>
            <h4
              className="flex text-base text-[#1c1c1acb]
                           md:w-full md:items-end md:text-lg md:font-medium
                           lg:ml-8 lg:text-lg lg:font-normal"
            >
              ( Jr. Frontend Developer )
            </h4>
          </div>
          <div
            id="nav-links"
            className="flex flex-col items-start px-6 py-3
                       md:w-[30%] md:items-end md:py-2 md:px-7
                       lg:w-[40%] lg:flex lg:flex-row lg:justify-end lg:gap-3 lg:px-0 lg:py-0 lg:text-base lg:font-normal"
          >
            <a href="#skills">Skills, </a>
            <a href="#projects">Projects, </a>
            <a href="#experience">Experience, </a>
            <a href="#about">About, </a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        <div
          id="hero-txt"
          className="w-full px-6 text-6xl font-bold
                     md:h-[25dvh] md:flex md:justify-center md:items-center md:px-0 md:py-0 md:text-[80px]
                     lg:w-full lg:h-[30vh] lg:top-[20%] lg:flex lg:items-center lg:justify-center lg:text-9xl lg:font-bold lg:uppercase lg:tracking-[0.41rem]"
        >
          <h1>
            Harshil Valiya<sup>&copy;</sup>
          </h1>
        </div>
        <div
          id="hero-btm"
          className="lg:w-full lg:h-[58vh] lg:flex lg:items-center lg:justify-between"
        >
          <div
            id="abt-cta"
            className="w-full px-6 py-3 text-start text-xl font-medium
                       md:text-2xl md:font-normal
                       lg:w-1/3 lg:h-full lg:flex lg:flex-col lg:items-start lg:justify-center lg:px-12 lg:text-2xl lg:font-normal"
          >
            <h3>Crafting engaging Frontend experiences for websites.</h3>
            <div
              id="socials"
              className="flex items-center justify-start mt-3
                         lg:mt-6 lg:gap-6"
            >
              <a
                className="px-3 py-1 flex items-center justify-center gap-2 text-sm font-normal rounded-full bg-[#1C1C1A] text-[#E6E6E1]
                           lg:px-6 lg:py-2 lg:flex lg:items-center lg:justify-center lg:gap-2 lg:text-base lg:font-medium lg:rounded-full lg:cursor-pointer"
                href="/asset/resume/harshil_valiya_resume.pdf"
                download
              >
                Resume
                <i className="ri-arrow-down-line"></i>
              </a>
            </div>
          </div>
          <div
            id="pfp"
            className="w-full h-[30dvh] flex justify-center items-center
                       md:h-[60dvh]
                       lg:w-1/3 lg:h-full lg:flex lg:items-center lg:justify-center"
          >
            <Image
              src={Vijay}
              alt="pic"
              height={1000}
              width={1000}
              className="w-[95%] h-[90%] object-cover object-top rounded-xl
                         md:object-center
                         lg:object-center"
            />
          </div>
          <div
            id="looking-job"
            className="w-full px-6 py-3 text-start text-sm font-normal
                       lg:w-1/3 lg:h-full lg:flex lg:flex-col lg:items-end lg:justify-end lg:px-12 lg:pb-6 lg:text-xl lg:font-normal lg:text-end"
          >
            <audio src="/asset/audio/long.mp3" id="audio"></audio>
            <Image
              src="/asset/images/gramophone.png"
              alt="r"
              height={1000}
              width={1000}
              className="hidden
                         lg:block lg:w-[100px] lg:h-[100px] lg:object-cover lg:object-top lg:cursor-pointer"
              onMouseEnter={() => {
                const audio =
                  document.querySelector<HTMLAudioElement>(
                    "#looking-job audio"
                  );
                if (audio) audio.play();
              }}
              onMouseLeave={() => {
                const audio =
                  document.querySelector<HTMLAudioElement>(
                    "#looking-job audio"
                  );
                if (audio) audio.pause();
              }}
            />
            <h6>
              I&apos;m open to opportunities as a <br />
              <span
                className="text-lg font-medium uppercase
                               lg:text-2xl lg:font-semibold"
              >
                fresher{" "}
                <span className="font-normal lowercase opacity-60">or</span>{" "}
                freelancer
              </span>
            </h6>
          </div>
        </div>
      </div>
    </main>
  );
}
