import { useState, useEffect } from 'react'
import MoodSelector from '../Components/MoodBoard/MoodSelector'
import RightPanel from '../Components/RightPanel/RightPanel'
import StressSlider from '../Components/StressSlider/StressSlider'
import Journal from '../Components/Journal/Journal'
import MoodGuide from '../Components/MoodBoard/MoodGuide'
import SleepInput from '../Components/SleepInput/SleepInput'
import WaterInput from '../Components/WaterInput/WaterInput'
import SaveCheckIn from '../Components/SaveCheckIn/SaveCheckIn'
import { getAllCheckIns, getStreak } from '../utils/storage'

function getGreeting() {
  const hour = new Date().getHours()
  if (hour < 12) return "Good morning"
  if (hour < 17) return "Good afternoon"
  return "Good evening"
}

function Home() {
  const [selectedMood, setSelectedMood] = useState(null)
  const [stressLevel, setStressLevel] = useState(5)
  const [journal, setJournal] = useState("")
  const [sleep, setSleep] = useState(7)
  const [water, setWater] = useState(0)
  const [streak, setStreak] = useState(0)

  useEffect(() => {
    const checkIns = getAllCheckIns()
    setStreak(getStreak(checkIns))
  }, [])

  function handleMoodChange(mood) {
    setSelectedMood(mood)
  }

  return (
    <div className="flex min-h-screen bg-purple-50">

      {/* left side */}
      <div className="flex-1 p-10 flex flex-col gap-6">

        {/* welcome + streak row */}
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-5xl font-medium text-green-700">
              {getGreeting()}, Bhumi! 🌸
            </h2>
            <p className="text-red-400 text-3xl mt-1">
              How are you feeling today?
            </p>
          </div>

          {/* streak card */}
          <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-2xl border border-orange-100 shadow-sm">
            <span className="text-3xl">🔥</span>
            <div>
              <p className="text-4xl font-bold text-orange-500">{streak}</p>
              <p className="text-3xl text-red-400">Day Streak</p>
            </div>
          </div>
        </div>

        {/* step 1 — mood */}
        <div className="flex flex-col gap-2">
          <p className="text-3xl font-semibold text-black-400">1. How are you feeling today?</p>
          <MoodSelector
            selectedMood={selectedMood}
            onMoodChange={handleMoodChange}
          />
        </div>

        {/* step 2 — stress */}
        <div className="flex flex-col gap-2">
          <p className="text-3xl font-semibold text-black-400">2. How would you rate your stress level?</p>
          <StressSlider stressLevel={stressLevel} setStress={setStressLevel} />
        </div>

        {/* step 3 + 4 — sleep + water side by side */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <p className="text-3xl font-semibold text-black-400">3. How many hours did you sleep?</p>
            <SleepInput sleep={sleep} setSleep={setSleep} />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-3xl font-semibold text-black-400">4. Glasses of water today</p>
            <WaterInput water={water} setWater={setWater} />
          </div>
        </div>

        {/* step 5 — journal */}
        <div className="flex flex-col gap-2">
          <p className="text-3xl font-semibold text-black-400">5. Write your thoughts (optional)</p>
          <Journal journal={journal} updateJournal={setJournal} />
        </div>

        {/* save button */}
        <SaveCheckIn
          checkInData={{ mood: selectedMood, stress: stressLevel, sleep, water, journal }}
        />

        {/* mood guide */}
        <MoodGuide />

      </div>

      {/* right side */}
      <div className="w-2/5 min-h-screen border-l border-gray-200 bg-purple-50 p-6 flex flex-col gap-4 overflow-y-auto">
        <RightPanel selectedMood={selectedMood} />
      </div>

    </div>
  )
}

export default Home