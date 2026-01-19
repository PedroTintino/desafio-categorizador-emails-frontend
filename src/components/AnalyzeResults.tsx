import type { AnalyzeEmailResponse } from "../types/email"

interface AnalyzeResultsProps {
  results: AnalyzeEmailResponse[]
}

export default function AnalyzeResults({ results }: AnalyzeResultsProps) {
  return (
    <div className="mt-10 max-w-5xl mx-auto mb-5 max-md:px-4">
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100">
        <div className="px-6 py-4 border-b">
          <h3 className="text-lg font-semibold text-gray-900">
            Last Results
          </h3>
        </div>

        <div className="p-6">
          {results.length === 0 ? (
            <p className="text-center text-gray-400">
              No emails analyzed yet
            </p>
          ) : (
            <>
              {/* Header */}
              <div className="grid grid-cols-[40px_2fr_160px_3fr] gap-4 pb-3 mb-4  text-sm font-medium text-gray-500">
                <span>#</span>
                <span>Content</span>
                <span>Category</span>
                <span>Suggested Answer</span>
              </div>

              <ul className="space-y-3">
                {results.map((result, index) => (
                  <li
                    key={index}
                    className="grid grid-cols-[40px_2fr_160px_3fr] gap-4 items-start p-4  rounded-xl"
                  >
                    <span className="text-gray-400 text-sm">
                      {index + 1}
                    </span>

                    <p className="text-sm text-gray-700 break-words">
                      {result.content}
                    </p>

                    <span className="font-medium text-gray-900">
                      {result.category}
                    </span>

                    <p className="text-sm text-gray-700">
                      {result.suggested_response}
                    </p>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
