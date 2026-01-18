import { useState } from "react"

interface EmailInputProps {
  onAnalyze: (subject: string) => void
  loading: boolean
}

export default function EmailInput({onAnalyze, loading}: EmailInputProps){
    //Só para ilustrar, já que em teoria a complexidade do projeto talvez não dependesse de uma tipagem forte
    const [subject, setSubject] = useState<string>("")

     const handleAnalyze = () => {
        onAnalyze(subject)
    }

    return(
         <div className="mt-8 flex justify-center">
      <div className="w-full max-w-xl">

        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Type your email main subject (ex: Happy new year!)"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            disabled={loading}
            className="
              flex-1 rounded-lg border border-gray-300
              px-4 py-3 text-gray-900
              placeholder:text-gray-400
              focus:outline-none focus:ring-2
              focus:ring-indigo-500 focus:border-indigo-500
            "
          />

           <button
          onClick={handleAnalyze}
          disabled={loading}
          className={`
            px-5 py-3 rounded-lg font-medium text-white
            transition flex items-center gap-2
            ${loading ? "bg-indigo-400 cursor-not-allowed" : "bg-indigo-600 hover:bg-indigo-700"}
          `}
        >
          {loading && (
            <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
          )}
          {loading ? "Analyzing..." : "Analyze"}
        </button>
        </div>
      </div>
    </div>
    )
}