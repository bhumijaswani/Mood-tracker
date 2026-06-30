function WaterInput({ water, setWater }) {

  function handleGlassClick(index) {
    // agar already filled hai aur usi pe click hua, ek kam kar do
    if (index < water) {
      setWater(index)
    } else {
      setWater(index + 1)
    }
  }

  return (
    <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100">

      <p className="text-3xl font-semibold text-gray-500 mb-4">💧 Glasses of water today</p>

      <div className="flex gap-2 justify-center">
        {Array(8).fill(null).map((_, index) => {
          const isFilled = index < water

          return (
            <button
              key={index}
              onClick={() => handleGlassClick(index)}
              className={`w-8 h-10 rounded-b-lg rounded-t-sm border-2 transition-all duration-200
                ${isFilled
                  ? "bg-blue-400 border-blue-500"
                  : "bg-gray-50 border-gray-200 hover:border-blue-200"
                }`}
            />
          )
        })}
      </div>

      <p className="text-center text-3xl text-gray-400 mt-3">{water} / 8 glasses</p>

    </div>
  )
}

export default WaterInput