import MoodBoard from "./MoodBoard"

function MoodGuide() {
  return (
    <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 mt-4">
      <p className="text-xl font-semibold text-green-800 mb-1">🧭 Mood Guide</p>
      <p className="text-xl font-semibold text-red-400 mb-4">Hover on a mood to know more</p>

      <MoodBoard mode="guide" />
    </div>
  )
}

export default MoodGuide