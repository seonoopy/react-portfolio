import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FullscreenSection from "./components/FullscreenSection";

function App() {
  return (
    <>
      {/* 네비게이션 바 */}
      <Navbar />

      {/* 각 섹션 */}
      <FullscreenSection id="#About" bgColor="bg-black">
        <h1 className="text-6xl md:text-8xl font-bold text-white">
          웹개발자 김선우 입니다
        </h1>
      </FullscreenSection>

      <FullscreenSection id="#Skills" bgColor="bg-white">
        <div className="text-center">
          <img
            src="/images/minji.jpg"
            alt="Profile"
            className="rounded-full w-48 h-48"
          />
          <h1 className="text-6xl md:text-8xl font-bold text-black">
            About Me
          </h1>
        </div>
      </FullscreenSection>

      <FullscreenSection id="#Projects" bgColor="bg-black">
        <h1 className="text-6xl md:text-8xl font-bold text-white">Skills</h1>
      </FullscreenSection>

      <FullscreenSection id="#Projects" bgColor="bg-white">
        <h1 className="text-6xl md:text-8xl font-bold text-black">Career</h1>
      </FullscreenSection>

      <FullscreenSection id="#Projects" bgColor="bg-black">
        <h1 className="text-6xl md:text-8xl font-bold text-white">Projects</h1>
      </FullscreenSection>

      <FullscreenSection id="#Contact" bgColor="bg-white">
        <h1 className="text-6xl md:text-8xl font-bold text-black">
          Contact Me
        </h1>
      </FullscreenSection>
      <Footer />
    </>
  );
}

export default App;
