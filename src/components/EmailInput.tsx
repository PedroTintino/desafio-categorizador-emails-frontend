import { useState } from "react"

interface EmailInputProps {
  onAnalyze: (content: string) => void
  loading: boolean
}

export default function EmailInput({ onAnalyze, loading }: EmailInputProps) {
  const [content, setContent] = useState<string>("")

  const handleAnalyze = () => {
    if (!content.trim()) return
    onAnalyze(content)
  }

  return (
    <div className="mt-8 flex justify-center">
      <div className="w-full max-w-xl">
        <div className="flex flex-col gap-3">
          <textarea
            placeholder="Paste the full email content here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            disabled={loading}
            rows={6}
            className="
              w-full rounded-lg border border-gray-300
              px-4 py-3 text-gray-900
              placeholder:text-gray-400
              focus:outline-none focus:ring-2
              focus:ring-indigo-500 focus:border-indigo-500
              resize-none
            "
          />

          <button
            onClick={handleAnalyze}
            disabled={loading}
            className={`
              px-5 py-3 rounded-lg font-medium text-white
              transition cursor-pointer flex items-center justify-center gap-2
              ${loading ? "bg-indigo-400 cursor-not-allowed" : "bg-indigo-600 hover:bg-indigo-700"}
            `}
          >
            {loading && (
              <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            )}
            {loading ? "Analyzing..." : "Analyze Email"}
          </button>
        </div>
      </div>
    </div>
  )
}
