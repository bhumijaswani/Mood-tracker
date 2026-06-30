import { useState, useEffect } from 'react'
import { getAllCheckIns } from '../utils/storage'
import CheckInCard from '../Components/CheckInCard/CheckInCard'

function History() {
  const [checkIns, setCheckIns] = useState([])

  useEffect(() => {
    const data = getAllCheckIns()
    setCheckIns([...data].reverse())
  }, [])

  return (
    <div className="min-h-screen bg-purple-50 p-8">

      <div className="mb-6">
        <h1 className="text-5xl font-semibold text-green-700">Your History 📋</h1>
        <p className="text-2xl text-black-400 mt-1">All your past check-ins in one place</p>
      </div>

      {checkIns.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-20 gap-3">
          <span className="text-6xl">🌱</span>
          <p className="text-black-400 text-lg">No check-ins yet.</p>
          <p className="text-black-400 text-sm">Start your first check-in from Home!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-8xl">
          {checkIns.map((checkIn, index) => (
            <CheckInCard key={index} checkIn={checkIn} />
          ))}
        </div>
      )}

    </div>
  )
}

export default History