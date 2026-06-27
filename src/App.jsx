import { useState } from 'react'
import './App.css'
import MoodSelector from './Components/MoodSelector';
import RightPanel from './Components/RightPanel';
import StressSlider from './Components/StressSlider';
import Journal from './Components/Journal';
import ThoughtCard from './Components/ThoughtCard';
import MoodGuide from './Components/MoodGuide';

function App() {
  const [selectedMood, setSelectedMood] = useState(null);
  const [stressLevel, setStressLevel] = useState(5);
  const [journal, setJournal] = useState("")

  function handleMoodChange(mood) {
    setSelectedMood(mood)
  }

  return (
    <div className="flex min-h-screen bg-green-50">

      {/* left side */}
      <div className="flex-1 p-8 flex flex-col gap-4">
        {/* welcome */}
        <div>
          <h2 className="text-4xl font-semibold text-green-600">Welcome back, Bhumi! 🌸</h2>
          <p className="text-2xl text-black-400">How are you feeling today?</p>
        </div>

        <MoodSelector
          selectedMood={selectedMood}
          onMoodChange={handleMoodChange}
        />

        <StressSlider stressLevel={stressLevel} setStress={setStressLevel} />

        <Journal journal={journal} updateJournal={setJournal} />

        <ThoughtCard />

        <MoodGuide />

      </div>

      {/* right side */}
      <div className="w-2/5 min-h-screen border-l border-gray-200 bg-white-100 p-5 flex flex-col gap-4 overflow-y-auto">
        <RightPanel selectedMood={selectedMood} />
      </div>

    </div>
  )
}

export default App