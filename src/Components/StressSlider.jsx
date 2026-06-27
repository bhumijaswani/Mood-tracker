function StressSlider({ stressLevel, setStress }) {
  const stressText = stressLevel <= 5 ? "Low" : "High"
  return (
    <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100">
      
      <p className="text-xl font-semibold text-gray-600 mb-4">
        How would you rate your stress level?
      </p>

      <div className="flex items-center gap-4">
        <input
          type="range"
          min="1"
          max="10"
          value={stressLevel}
          onChange={(e) => setStress(Number(e.target.value))}
          className="flex-1 accent-pink-400 cursor-pointer h-2"
        />
        <span className="text-sm font-bold text-gray-700 w-6 text-center">
          {stressLevel}
        </span>
      </div>

      <div className="flex justify-between text-xl text-gray-400 mt-2">
        <span>Low</span>
        <span>High</span>
      </div>

      <p className={`text-xl font-semibold mt-3 ${stressLevel <= 5 ? "text-green-500" : "text-red-400"}`}>
        Stress: {stressText}
      </p>

    </div>
  )
}

export default StressSlider