import React from "react";
import FullscreenSection from "../components/FullscreenSection";

const Home = () => {
  return (
    <div>
      {/* 각 섹션 */}
      <FullscreenSection bgColor="bg-black">
        <h1 className="text-6xl md:text-8xl font-bold text-white">
          Hello, I'm Matthew.
        </h1>
      </FullscreenSection>
      <img
        src="/images/minji.jpg"
        alt="Profile"
        className="rounded-full w-48 h-48"
      />
      <FullscreenSection id="section2" bgColor="bg-blue-800">
        <div className="text-center">
          <img
            src="/assets/profile.jpg"
            alt="Profile"
            className="rounded-full w-32 h-32 mx-auto mb-4"
          />
          <h1 className="text-6xl md:text-8xl font-bold text-white">
            About Me
          </h1>
        </div>
      </FullscreenSection>

      <FullscreenSection bgColor="bg-blue-800">
        <h1 className="text-6xl md:text-8xl font-bold text-white">
          I create web experiences.
        </h1>
      </FullscreenSection>

      <FullscreenSection bgColor="bg-green-700">
        <h1 className="text-6xl md:text-8xl font-bold text-white">
          Let's work together.
        </h1>
      </FullscreenSection>
    </div>
  );
};

export default Home;
