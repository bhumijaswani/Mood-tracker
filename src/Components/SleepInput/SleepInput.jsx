function SleepInput({ sleep, setSleep }) {

  function increase() {
    setSleep(sleep + 0.5)
  }

  function decrease() {
    if (sleep > 0) {
      setSleep(sleep - 0.5)
    }
  }

  return (
    <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100">

      <p className="font-semibold text-gray-500 mb-4 text-3xl">😴 How many hours did you sleep?</p>

      <div className="flex items-center justify-center gap-6">
        <button
          onClick={decrease}
          className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 text-xl font-bold hover:bg-blue-200 transition-all"
        >
          −
        </button>

        <span className="text-2xl font-bold text-gray-700 w-20 text-center">
          {sleep} hrs
        </span>

        <button
          onClick={increase}
          className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 text-xl font-bold hover:bg-blue-200 transition-all"
        >
          +
        </button>
      </div>

    </div>
  )
}

export default SleepInput