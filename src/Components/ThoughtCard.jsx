import { useState, useEffect } from "react"

function ThoughtCard() {
  const [quote, setQuote] = useState("")
  const [author, setAuthor] = useState("")

  const fetchThought = async () => {
    try {
      const url = "https://api.api-ninjas.com/v1/quotes?categories=success%2Cwisdom"
      const apiKey = "vslm5QOy6kqxka48ZhZTJibAEZ5i41F6xrIQyHUC";
      // const response = await fetch(url, {
      //   headers: { "X-Api-Key": apiKey }
      // })

      // const data = await response.json()

      setQuote(data[0].quote)
      setAuthor(data[0].author)

    } catch (error) {
      console.log("Error:", error)
    }
  }

  useEffect(() => {
    fetchThought()
  }, [])

  return (
    <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 mt-4">

      <p className="text-xl font-semibold text-gray-500 mb-3">💭 Thought of the day</p>

      {quote ? (
        <div>
          <p className="text-xl text-pink-700 italic leading-relaxed">"{quote}"</p>
          <p className="text-xs text-gray-400 mt-2 text-right">— {author}</p>
        </div>
      ) : (
        <p className="text-xl text-gray-400">Loading thought...</p>
      )}

      <button
        onClick={fetchThought}
        className="mt-4 text-xl text-green-600 border border-green-200 px-3 py-1 rounded-full hover:bg-green-50 transition-all"
      >
        New thought ✨
      </button>

    </div>
  )
}

export default ThoughtCard