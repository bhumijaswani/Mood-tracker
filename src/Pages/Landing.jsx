import { useNavigate } from "react-router-dom";
import hero from "../assets/hero.png";

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#eefcf6] via-white to-[#edfdfa]">

      {/* Navbar */}
      <header className="max-w-[1600px] mx-auto flex items-center justify-between px-20 py-8">

        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <span className="text-3xl">💚</span>

          <h1 className="text-5xl font-bold text-emerald-500">
            MindCare
          </h1>
        </div>

        <nav className="flex items-center gap-14 text-xl font-medium text-slate-700">

          <span
            onClick={() => navigate("/home")}
            className="cursor-pointer hover:text-emerald-500 transition text-2xl"
          >
            Home
          </span>

          <span
            onClick={() => navigate("/history")}
            className="cursor-pointer hover:text-emerald-500 transition text-2xl"
          >
            History
          </span>

          <span
            onClick={() => navigate("/insights")}
            className="cursor-pointer hover:text-emerald-500 transition text-2xl"
          >
            Insights
          </span>

          <span
            onClick={() => navigate("/selfcare")}
            className="cursor-pointer hover:text-emerald-500 transition text-2xl"
          >
            Self-Care
          </span>

        </nav>

      </header>

      {/* Hero Section */}

      <section className="max-w-[1600px] mx-auto min-h-[86vh] flex items-center justify-between gap-4 px-20">

        {/* Left */}

        <div className="w-[55%] pr-10">

          <p className="flex items-center gap-2 text-emerald-500 text-2xl font-semibold mb-8">
            🌿 Your wellness companion
          </p>

          <h1 className="text-[88px] leading-[1.03] font-extrabold tracking-tight text-slate-800">
            Welcome to
          </h1>

          <h1 className="text-[88px] leading-[1.03] font-extrabold tracking-tight text-emerald-500 mb-8">
            MindCare
            <span className="text-pink-400 ml-3">♡</span>
          </h1>

          <h2 className="text-[36px] font-medium text-slate-600">
            Check In. Understand. Heal.
          </h2>

          <p className="mt-7 text-[22px] leading-10 text-slate-500 max-w-2xl">
            A safe space for your thoughts and feelings.
            Track your mood, manage stress, build healthy
            habits, and take care of your mind every single day.
          </p>

          <button
            onClick={() => navigate("/home")}
            className="mt-12 flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-green-500 text-white text-2xl font-semibold px-12 py-5 rounded-full shadow-xl hover:scale-105 transition duration-300"
          >
            🌿 Start Your Check-In
          </button>

          <div className="mt-10 bg-white rounded-3xl shadow-lg border border-gray-100 px-6 py-5 w-fit flex items-center gap-5">

            <span className="text-4xl">🌱</span>

            <div>

              <p className="text-lg text-slate-600">
                Small steps today,
              </p>

              <p className="text-xl font-semibold text-emerald-500">
                better you tomorrow. ✨
              </p>

            </div>

          </div>

        </div>

        {/* Right */}

        <div className="relative w-[45%] flex justify-center items-center">

          {/* Glow */}

          <div className="absolute w-[720px] h-[720px] rounded-full bg-cyan-100 blur-[130px] opacity-70"></div>

          {/* Image */}

          <img
            src={hero}
            alt="MindCare Hero"
            className="relative z-10 w-[680px] object-contain"
          />

        </div>

      </section>

    </div>
  );
}

export default Landing;