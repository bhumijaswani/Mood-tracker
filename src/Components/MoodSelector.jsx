import MoodBoard from "./MoodBoard"

function MoodSelector({ selectedMood, onMoodChange }) {
  return (
    <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100">
      <p className="text-xl font-semibold text-gray-500 mb-4">Select your current mood</p>

      <MoodBoard
        mode="select"
        selectedMood={selectedMood}
        onMoodChange={onMoodChange}
      />

      <p className="text-center text-xl text-green-600 mt-4">
        💚 It's okay to not be okay. You're doing your best. 💚
      </p>
    </div>
  )
}

export default MoodSelector