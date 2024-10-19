import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-900 min-h-[100vh] flex justify-around items-center gap-5 flex-wrap p-3">
      <div className="text-center">
        <h2 className="text-4xl text-white mb-4">
          <span className="text-5xl">Hi, </span>I'm{" "}
          <span className="text-yellow-300 text-4xl">Arsalan Raza Azmi</span>
        </h2>
        <h4 className="text-4xl text-white">Junior Frontend Developer</h4>
        <button className="mt-8 bg-transparent shadow-md shadow-yellow-200 text-xl text-yellow-200 border-yellow-200 px-4 py-1">
          Contact Me
        </button>
      </div>
      <div className="customBackground">
        <img
          src="/images/profile_image.png"
          height="400px"
          width="400px"
          alt="profile"
        />
      </div>
    </div>
  );
}
