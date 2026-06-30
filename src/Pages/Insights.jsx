import { useState, useEffect } from 'react'
import { getAllCheckIns } from '../utils/storage'

function Insights() {
  const [checkIns, setCheckIns] = useState([])

  useEffect(() => {
    setCheckIns(getAllCheckIns())
  }, [])

  if (checkIns.length === 0) {
    return (
      <div className="min-h-screen bg-green-50 flex flex-col items-center justify-center gap-3">
        <span className="text-6xl">📊</span>
        <p className="text-gray-400 text-lg">No data yet to show insights.</p>
        <p className="text-gray-400 text-sm">Complete a few check-ins first!</p>
      </div>
    )
  }

  // calculations
  const total = checkIns.length
  const avgStress = (checkIns.reduce((sum, c) => sum + c.stress, 0) / total).toFixed(1)
  const avgSleep  = (checkIns.reduce((sum, c) => sum + c.sleep,  0) / total).toFixed(1)
  const avgWater  = (checkIns.reduce((sum, c) => sum + c.water,  0) / total).toFixed(1)

  const moodCount = checkIns.reduce((acc, c) => {
    acc[c.mood] = (acc[c.mood] || 0) + 1
    return acc
  }, {})
  const dominantMood = Object.entries(moodCount).sort((a, b) => b[1] - a[1])[0][0]

  const moodEmoji = { happy:"😊", calm:"😌", okay:"😐", sad:"😔", stressed:"😣" }

  const last3Stress = checkIns.slice(-3)
  const highStress3Days = last3Stress.length === 3 && last3Stress.every(c => c.stress > 7)

  return (
    <div className="min-h-screen bg-purple-50 p-8">

      <div className="mb-6">
        <h1 className="text-4xl font-semibold text-green-700">Your Insights 📊</h1>
        <p className="text-2xl text-black-400 mt-1">Understand your patterns over time</p>
      </div>

      {/* stat cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">

        <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm text-center h-42">
          <p className="text-3xl text-black-400 mb-1">Total Check-ins</p>
          <p className="text-6xl font-semibold text-green-600">{total}</p>
        </div>

        <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm text-center h-42">
          <p className="text-3xl text-black-400 mb-1">Avg Stress</p>
          <p className="text-6xl font-semibold text-red-400">{avgStress}<span className="text-sm">/10</span></p>
        </div>

        <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm text-center">
          <p className="text-3xl text-black-400 mb-1">Avg Sleep</p>
          <p className="text-6xl font-semibold text-blue-400">{avgSleep}<span className="text-sm"> hrs</span></p>
        </div>

        <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm text-center">
          <p className="text-3xl text-black-400 mb-1">Avg Water</p>
          <p className="text-6xl font-semibold text-cyan-400">{avgWater}<span className="text-sm">/8</span></p>
        </div>

      </div>

      {/* dominant mood */}
      <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm mb-4 max-w-md">
        <p className="text-3xl text-red-400 mb-2">Most frequent mood</p>
        <p className="text-5xl">{moodEmoji[dominantMood]}</p>
        <p className="text-xl text-black-700 mt-1 capitalize">{dominantMood}</p>
      </div>

      {/* warning card */}
      {highStress3Days && (
        <div className="bg-red-50 border border-red-200 rounded-3xl p-5 max-w-md">
          <p className="text-red-600 font-semibold text-xl">⚠️ High stress for 3 consecutive days</p>
          <p className="text-red-400 text-xl mt-1">Try a breathing exercise or take a short walk 🌿</p>
        </div>
      )}

    </div>
  )
}

export default Insights