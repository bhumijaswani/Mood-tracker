import { saveCheckIn } from '../../utils/storage'

function SaveCheckIn({ checkInData }) {

  function handleSave() {
    if (!checkInData.mood) {
      alert("Please select a mood first! 🌸")
      return
    }

    saveCheckIn(checkInData)
    alert("Check-in saved! 🌿 Keep going!")
  }

  return (
    <button
      onClick={handleSave}
      className="w-full bg-green-600 text-white font-semibold py-4 rounded-3xl text-lg hover:bg-green-700 active:scale-95 transition-all"
    >
      🌿 Save My Check-In
    </button>
  )
}

export default SaveCheckIn