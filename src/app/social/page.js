import Navbar from "@/Components/Navbar";
import Image from "next/image";
import React from "react";

import manonlaptop from "@/app/manonlaptop.png";

import call from "@/app/discall.png";
import sign from "@/app/signature.png";
import paper from "@/app/paper.png";
import elements from "@/app/elements.png";

import instagram from "@/app/instagram4.png";
import link from "@/app/images/linkedin3.png";
import youtube from "@/app/youtube-2.png";

import Footer from "@/Components/Footer";

import Frame from "@/app/Frame.png";

const SocialPage = () => {
  const bgStyle = {
    backgroundImage: `url(${Frame.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "700px",
    width: "100%",
  };

  return (
    <div>
      <Navbar />

      <div
        className="container mx-auto backdrop-opacity-10 h-[584px] w-full lg:w-[1341px] mt-36"
        style={bgStyle}
      >
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center pt-16 w-full text-center lg:text-left">
          {/* Heading Section */}
          <div className="mb-8 lg:mb-0">
            <h1 className="text-[30px]  lg:text-[55px] font-medium font-helvetica lg:w-[892px] lg:h-[219px]  lg:pl-10 leading-tight">
              Revolutionizing Feeds, Redefining Connections, Social Media Done
              Right
            </h1>
            <p className="text-sm sm:text-[16px] lg:h-[69px] lg:w-[450px] lg:mt-8 font-medium mt-4 mx-8 font-[Inter]">
              We craft engaging strategies and content to elevate your brand,
              foster connections, and drive impactful results across all
              platforms.
            </p>
          </div>

          {/* Image Section */}
          <div className="lg:h-[663px] lg:w-[663px] mt-32 lg:mt-20 relative">
            <Image
              src={manonlaptop}
              alt="logo"
              width={663}
              height={663}
              className="lg:pt-32 md:h-[663px] md:w-[663px]  absolute right-12 scale-150 object-contain"
            />
          </div>
        </div>
      </div>

       <div className="container mx-auto lg:h-[584px] w-full lg:w-[1341px] mt-16 lg:mt-56 flex flex-col lg:flex-row gap-12 lg:gap-10">
        <div className="lg:w-[343px] lg:h-[452px] md:w-[400px] md:h-full bg-gradient-to-b from-[#000000] to-[#393939] text-white  shadow-2xl rounded-xl p-6 mx-auto lg:mt-14 w-[280px]">
          {/* Icon Section */}
          <div className="flex justify-start mb-4 ">
            <div className="bg-[#2E2E2E] rounded-lg w-[42px] h-[42px] flex justify-center items-center shadow-md border-[#5A5A5A] border-2">
              <Image
                src={instagram}
                alt="Instagram Icon"
                className="object-contain w-[30px] h-[30px] "
              />
            </div>
          </div>

          {/* Title Section */}
          <h2 className="text-[22px] font-semibold mb-2">Instagram 360</h2>
          <p className="text-[12px] text-[#A1A1A1] mb-16  tracking-wide font-medium fonr-[Inter]">
            Building brands that go beyond the ordinary, powered by innovation
            and bold ideas."
          </p>

          {/* Button */}
          <div className="flex justify-center ">
            <button className="w-[296px] h-[36px]  bg-[#FFFFFF] text-[#000000] py-2 rounded-lg text-sm font-medium mb-6 ">
              Let’s Connect
            </button>
          </div>

          {/* Features List */}
          <ul className="text-[14px]  space-y-4 font-medium">
            <li>Content Creation</li>

            <li>Reels and Video Production</li>
            <li>Content Strategy and Planning</li>
            <li>Account Management</li>
          </ul>
        </div>

        <div className="lg:w-[440px] lg:h-[580px] w-[280px] h-auto md:w-[400px] md:h-full scale-100 mx-auto   bg-gradient-to-b from-[#000000] to-[#393939] text-white  shadow-2xl rounded-xl p-6">
          {/* Icon Section */}
          <div className="flex justify-start mb-4 ">
            <div className="bg-[#2E2E2E] rounded-lg w-[42px] h-[42px] flex justify-center items-center shadow-md border-[#5A5A5A] border-2">
              <Image
                src={youtube}
                alt="Youtube Icon"
                width={24}
                height={24}
                className="object-contain w-[30px] h-[30px]  mt-2"
              />
            </div>
          </div>

          {/* Title Section */}
          <h2 className="text-[22px] font-semibold text-white mb-2">Youtube</h2>
          <p className="text-[12px] text-[#A1A1A1] mb-10  tracking-wider font-medium  font-[Inter]">
            Building brands that go beyond the ordinary, powered by innovation
            and bold ideas."
          </p>

          <div className="w-full flex justify-center">
            {/* Button */}
            <button className=" bg-[#FFFFFF] text-black py-2 px-24  rounded-lg text-sm font-semibold mb-14">
              Let’s Connect
            </button>
          </div>

          {/* Features List */}
          <ul className="text-[14px]  space-y-6 font-medium text-[#E0E0E0]">
            <li>Channel Strategy & Optimization</li>
            <li>Content Creation</li>
            <li>Video SEO & Metadata Optimization</li>
            <li>Content Calendar & Scheduling Content </li>
            <li>YouTube Ads Management</li>
            <li>Analytics & Reporting</li>
          </ul>
        </div>

        <div className="lg:w-[343px] lg:h-[452px] md:w-[400px] md:h-full bg-gradient-to-b from-[#000000] to-[#393939] text-white  shadow-2xl rounded-xl p-6 mx-auto lg:mt-14 w-[280px]">
          {/* Icon Section */}
          <div className="flex justify-start mb-4 ">
            <div className="bg-[#2E2E2E] rounded-lg w-[42px] h-[42px] flex justify-center items-center shadow-md border-[#5A5A5A] border-2">
              <Image
                src={link}
                alt="Instagram Icon"
                className="object-contain w-[30px] h-[30px] "
              />
            </div>
          </div>

          {/* Title Section */}
          <h2 className="text-[22px] font-semibold mb-2">Linkedin</h2>
          <p className="text-[12px] text-[#A1A1A1] mb-16  tracking-wide font-medium fonr-[Inter]">
            Building brands that go beyond the ordinary, powered by innovation
            and bold ideas."
          </p>

          {/* Button */}
          <div className="flex justify-center ">
            <button className="w-[296px] h-[36px]  bg-[#FFFFFF] text-[#000000] py-2 rounded-lg text-sm font-medium mb-6 ">
              Let’s Connect
            </button>
          </div>

          {/* Features List */}
          <ul className="text-[14px]  space-y-4 font-medium">
            <li>Profile Optimization & Branding</li>
            <li>Content Strategy & Creation</li>
            <li>LinkedIn Ads Management</li>
            <li>Analytics & Reporting</li>
          </ul>
        </div>
      </div>

      <div className="lg:w-[924px] lg:h-[46px] container mx-auto mt-16 lg:mt-40 text-center tracking-wide">
        <p className="text-[12px] font-medium">
          Boost your brand’s social media with Markitify's expert management
          services. Engage audiences, drive growth, and achieve measurable
          results. Get started today!
        </p>
      </div>

      <div className="mt-20 lg:mt-56 container mx-auto text-center flex flex-col items-center h-auto lg:h-[500px]">
        <h1 className="text-[14px] font-medium text-[#4A4A4A] mb-10">
          What you will get
        </h1>
        <div className="w-full lg:w-[700px] md:w-[500px] flex flex-col">
          <div className="flex flex-wrap gap-4 sm:gap-6 justify-center">
            <div className="text-[14px] font-medium bg-[#F2F2F2] px-4 sm:px-6 py-1 border-2 border-dashed rounded-lg">
              Graphic design
            </div>
            <div className="text-[14px] font-medium bg-[#F2F2F2] px-4 sm:px-6 py-1 border-2 border-dashed rounded-lg">
              storytelling
            </div>
            <div className="text-[14px] font-medium bg-[#F2F2F2] px-4 sm:px-6 py-1 border-2 border-dashed rounded-lg">
              CMS
            </div>
          </div>
          <div className="flex flex-wrap gap-4 sm:gap-6 justify-center mt-4">
            <div className="text-[14px] font-medium bg-[#F2F2F2] px-4 sm:px-6 py-1 border-2 border-dashed rounded-lg">
              Quality assurance
            </div>
            <div className="text-[14px] font-medium bg-[#F2F2F2] px-4 sm:px-6 py-1 border-2 border-dashed rounded-lg">
              Video editing
            </div>
            <div className="text-[14px] font-medium bg-[#F2F2F2] px-4 sm:px-6 py-1 border-2 border-dashed rounded-lg">
              Color grading/Them selection
            </div>
          </div>
          <div className="flex flex-wrap gap-4 sm:gap-6 justify-center mt-4">
            <div className="text-[14px] font-medium bg-[#F2F2F2] px-4 sm:px-6 py-1 border-2 border-dashed rounded-lg">
              storytelling
            </div>
            <div className="text-[14px] font-medium bg-[#F2F2F2] px-4 sm:px-6 py-1 border-2 border-dashed rounded-lg">
              Audio editing
            </div>
            <div className="text-[14px] font-medium bg-[#F2F2F2] px-4 sm:px-6 py-1 border-2 border-dashed rounded-lg">
              branding
            </div>
          </div>
        </div>
      </div>

      <div className="lg:mt-16 mt-60 mb-44 container mx-auto text-center flex flex-col items-center">
        <h1 className="text-[14px]  font-medium text-[#4A4A4A] mb-10">
          Take off in just 4 steps
        </h1>
        <div className="lg:flex lg:flex-row lg:gap-8 flex flex-col gap-6 lg:w-[1183px] w-400px md:w-[500px] lg:h-auto lg:rounded-2xl lg:border-y-2 lg:border-x-2 lg:border-dashed p-6 sm:p-12 justify-center items-center border-[#828282] mb-20">
          {/* Step 1 */}
          <div className="w-[300px] sm:w-[260px] md:w-[400px] md:h-full h-auto max-h-[200px] bg-white text-black rounded-2xl drop-shadow-2xl p-4">
            <div className="flex justify-start gap-x-2 items-center">
              <Image src={call} alt="discover call" width={32} height={32} />
              <h1 className="font-semibold text-[12px] lg:text-[16px] text-[#4A4A4A]">
                Discover Call
              </h1>
            </div>
            <p className="font-medium text-[10px] sm:text-[10px] w-full h-auto mt-2 text-left tracking-wider">
              We start with a conversation to understand your business, goals,
              and audience. This helps us identify your needs and outline a
              personalized approach for your project.
            </p>
          </div>

          {/* Step 2 */}
          <div className="w-[300px] sm:w-[260px] md:w-[400px] md:h-full h-auto max-h-[200px] bg-[#212121] text-[#D5D5D5] rounded-2xl p-4">
            <div className="flex justify-start gap-x-2 items-center ">
              <Image src={sign} alt="discover call" width={32} height={32} />
              <h1 className="font-semibold text-[14px] lg:text-[15px]">
                Proposal & Agreement
              </h1>
            </div>
            <p className="font-medium text-[10px] sm:text-[10px] w-full h-auto mt-2 text-left tracking-wide text-[#D5D5D5]">
              Based on our discussion, we create a detailed proposal with a
              clear project scope, timelines, and deliverables. Once you
              approve, we finalize the agreement to move forward confidently.
            </p>
          </div>

          {/* Step 3 */}
          <div className="w-[300px] sm:w-[260px] md:w-[400px] md:h-full h-auto max-h-[200px] bg-white text-black rounded-2xl drop-shadow-2xl p-4">
            <div className="flex justify-start gap-x-2 items-center">
              <Image
                src={elements}
                alt="discover call"
                width={20}
                height={20}
              />
              <h1 className="font-semibold text-[14px] sm:text-[16px]">
                Collaboration/Approval
              </h1>
            </div>
            <p className="font-medium text-[10px] sm:text-[10px] w-full h-auto mt-2 text-left tracking-wider">
              We start with a conversation to understand your business, goals,
              and audience. This helps us identify your needs and outline a
              personalized approach for your project.
            </p>
          </div>

          {/* Step 4 */}
          <div className="w-[300px] sm:w-[260px] md:w-[400px] md:h-full h-auto max-h-[200px] bg-[#212121] text-[#D5D5D5] rounded-2xl drop-shadow-2xl p-4">
            <div className="flex justify-start gap-x-4 items-center">
              <Image src={paper} alt="discover call" width={32} height={32} />
              <h1 className="font-semibold text-[14px] sm:text-[16px]">
                Take Off
              </h1>
            </div>
            <p className="font-medium text-[10px] sm:text-[10px] w-full h-auto mt-3 text-left tracking-wider">
              We start with a conversation to understand your business, goals,
              and audience. This helps us identify your needs and outline a
              personalized approach for your project.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SocialPage;
