function Journal({ journal, updateJournal }) {
  return (
    <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 mt-4">

      <p className="text-xl font-semibold text-gray-600 mb-3">
        Write your thoughts <span className="text-gray-500 text-xl font-normal">(optional)</span>
      </p>

      <textarea
        value={journal}
        onChange={(e) => updateJournal(e.target.value)}
        placeholder="What's on your mind?"
        rows={4}
        className="w-full resize-none rounded-2xl border border-gray-200 p-3 text-xl text-gray-700 placeholder-gray-300 focus:outline-none focus:border-green-300 focus:ring-1 focus:ring-green-200 transition-all"
      />

    </div>
  )
}

export default Journal