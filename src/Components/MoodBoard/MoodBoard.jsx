const moods = [
  { id: "happy",    emoji: "😊", label: "Happy",    bg: "bg-green-100",  border: "border-green-400",  text: "text-green-700",  tip: "You're radiating good energy!"     },
  { id: "calm",     emoji: "😌", label: "Calm",     bg: "bg-blue-100",   border: "border-blue-400",   text: "text-blue-700",   tip: "Peace looks good on you."          },
  { id: "okay",     emoji: "😐", label: "Okay",     bg: "bg-yellow-100", border: "border-yellow-400", text: "text-yellow-700", tip: "Okay is perfectly fine."           },
  { id: "sad",      emoji: "😔", label: "Sad",      bg: "bg-pink-100",   border: "border-pink-400",   text: "text-pink-700",   tip: "It's okay to feel this way."       },
  { id: "stressed", emoji: "😣", label: "Stressed", bg: "bg-purple-100", border: "border-purple-400", text: "text-purple-700", tip: "Take a breath. You've got this."   },
]

function MoodBoard({ mode, selectedMood, onMoodChange }) {
  return (
    <div className="flex gap-3 justify-between">
      {moods.map((mood) => {
        const isSelected = selectedMood === mood.id

        return (
          <button
            key={mood.id}
            onClick={() => mode === "select" && onMoodChange(mood.id)}
            title={mode === "guide" ? mood.tip : ""}
            className={`flex flex-col items-center justify-center gap-2 w-full py-4 rounded-2xl border-2 transition-all duration-200
              ${mode === "guide" ? "cursor-default" : "cursor-pointer"}
              ${isSelected
                ? `${mood.bg} ${mood.border}`
                : "bg-gray-50 border-transparent hover:border-gray-200"
              }`}
          >
            <span className="text-4xl">{mood.emoji}</span>
            <span className={`text-xl font-semibold ${isSelected ? mood.text : "text-brown-500"}`}>
              {mood.label}
            </span>
            {mode === "guide" && (
              <span className="text-sm text-gray-400 text-center px-1 leading-tight">
                {mood.tip}
              </span>
            )}
          </button>
        )
      })}
    </div>
  )
}

export default MoodBoard