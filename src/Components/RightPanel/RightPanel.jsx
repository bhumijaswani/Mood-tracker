const moodMessages = {
  happy: {
    title: "Yayyy! 🌈",
    message: "Today we are super excited for our day!",
    tagline: "Keep shining, you amazing human! ✨",
    border: "border-green-300",
    titleColor: "text-green-700",
    tagBg: "bg-green-100",
  },
  calm: {
    title: "We love this calm energy! 🌧️",
    message: "You're taking care of your mind so well.",
    tagline: "Breathe in peace, breathe out stress. 💙",
    border: "border-blue-300",
    titleColor: "text-blue-700",
    tagBg: "bg-blue-100",
  },
  okay: {
    title: "You're doing okay, and that's okay. 💛",
    message: "Every day is a new chance to grow.",
    tagline: "Progress, not perfection. 🌱",
    border: "border-yellow-300",
    titleColor: "text-yellow-600",
    tagBg: "bg-yellow-100",
  },
  sad: {
    title: "Aww, today we feeling sad. 💜",
    message: "It's okay to feel this way. You are not alone.",
    tagline: "Be gentle with yourself today. 🌸",
    border: "border-pink-300",
    titleColor: "text-pink-700",
    tagBg: "bg-pink-100",
  },
  stressed: {
    title: "Looks like today feels a bit heavy. 🌩️",
    message: "Take a deep breath. You'll get through this.",
    tagline: "You are stronger than you think. 💜",
    border: "border-purple-300",
    titleColor: "text-purple-700",
    tagBg: "bg-purple-100",
  },
}

function MoodMessageCard({ mood, isSelected }) {
  const data = moodMessages[mood]
  const emojis = { happy:"😊", calm:"😌", okay:"😐", sad:"😔", stressed:"😣" }

  return (
    <div className={`flex h-1/5 items-center gap-4 p-5 rounded-2xl border-2 bg-white transition-all duration-300
      ${data.border}
      ${isSelected ? "opacity-100 scale-100 shadow-md" : "opacity-50 scale-95"}`}
    >
      <span className="text-7xl shrink-0">{emojis[mood]}</span>

      <div className="flex flex-col gap-2">
        <h3 className={`text-3xl ${data.titleColor}`}>
          {data.title}
        </h3>
        <p className="text-2xl text-gray-500 leading-relaxed">
          {data.message}
        </p>
        <span className={`text-xl font-medium px-5 py-2 rounded-full w-fit text-center ${data.tagBg} ${data.titleColor}`}>
          {data.tagline}
        </span>
      </div>
    </div>
  )
}

function RightPanel({ selectedMood }) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-4xl font-semibold text-center text-pink-700 py-2">
         Mood Updated Messages ✨
      </h2>

      <div className="flex flex-col gap-3">
        {Object.keys(moodMessages).map((mood) => (
          <MoodMessageCard
            key={mood}
            mood={mood}
            isSelected={selectedMood === mood}
          />
        ))}
      </div>
    </div>
  )
}

export default RightPanel