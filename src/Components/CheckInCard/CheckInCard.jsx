const moodMap = {
  happy: {
    emoji: "😊",
    label: "Happy",
    color: "text-green-600",
    bg: "bg-green-50",
    border: "border-green-200",
  },
  calm: {
    emoji: "😌",
    label: "Calm",
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-200",
  },
  okay: {
    emoji: "😐",
    label: "Okay",
    color: "text-yellow-600",
    bg: "bg-yellow-50",
    border: "border-yellow-200",
  },
  sad: {
    emoji: "😔",
    label: "Sad",
    color: "text-pink-600",
    bg: "bg-pink-50",
    border: "border-pink-200",
  },
  stressed: {
    emoji: "😣",
    label: "Stressed",
    color: "text-purple-600",
    bg: "bg-purple-50",
    border: "border-purple-200",
  },
};

function CheckInCard({ checkIn }) {
  const mood = moodMap[checkIn.mood];

  const date = new Date(checkIn.date).toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const journalPreview = checkIn.journal
    ? checkIn.journal.slice(0, 120) +
      (checkIn.journal.length > 120 ? "..." : "")
    : "No journal entry.";

  return (
    <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-7 hover:shadow-xl transition-all duration-300">

      {/* Header */}

      <div className="flex justify-between items-center">

        <div>
          <h3 className="font-semibold text-gray-800 text-lg">
            {date}
          </h3>

          <p className="text-sm text-gray-400">
            Daily Check-In
          </p>
        </div>

        <div
          className={`flex items-center gap-2 px-4 py-2 rounded-full border ${mood.bg} ${mood.border}`}
        >
          <span className="text-xl">{mood.emoji}</span>

          <span className={`font-semibold ${mood.color}`}>
            {mood.label}
          </span>
        </div>

      </div>

      {/* Divider */}

      <div className="my-6 border-t border-gray-100"></div>

      {/* Stats */}

      <div className="space-y-4">

        <div className="flex justify-between items-center bg-blue-50 rounded-2xl px-5 py-4 border border-blue-100">

          <div className="flex items-center gap-3">

            <span className="text-2xl">😴</span>

            <span className="font-medium text-gray-700">
              Sleep
            </span>

          </div>

          <span className="text-xl font-bold text-blue-500">
            {checkIn.sleep} hrs
          </span>

        </div>

        <div className="flex justify-between items-center bg-cyan-50 rounded-2xl px-5 py-4 border border-cyan-100">

          <div className="flex items-center gap-3">

            <span className="text-2xl">💧</span>

            <span className="font-medium text-gray-700">
              Water Intake
            </span>

          </div>

          <span className="text-xl font-bold text-cyan-500">
            {checkIn.water}/8
          </span>

        </div>

        <div className="flex justify-between items-center bg-red-50 rounded-2xl px-5 py-4 border border-red-100">

          <div className="flex items-center gap-3">

            <span className="text-2xl">😣</span>

            <span className="font-medium text-gray-700">
              Stress Level
            </span>

          </div>

          <span className="text-xl font-bold text-red-500">
            {checkIn.stress}/10
          </span>

        </div>

      </div>

      {/* Journal */}

      <div className="mt-6">

        <p className="font-semibold text-gray-500 mb-3">
          📝 Journal
        </p>

        <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">

          <p className="italic text-gray-600 leading-7">
            "{journalPreview}"
          </p>

        </div>

      </div>

    </div>
  );
}

export default CheckInCard;