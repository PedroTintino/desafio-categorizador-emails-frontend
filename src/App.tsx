import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import EmailInput from './components/EmailInput'
import AnalyzeResults from './components/AnalyzeResults'
import type { AnalyzeEmailResponse } from './types/email'

function App() {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<AnalyzeEmailResponse[]>([])

    const analyzeEmail = async (subject: string) => {
    if (!subject.trim()) return

    try {
      setLoading(true)

      const response = await fetch("http://127.0.0.1:8000/analyze-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: subject }),
      })

      const data = await response.json()

      setResults(prev => [
        {
          category: data.category,
          suggested_response: data.suggested_response,
          content: subject,
        },
        ...prev,
      ])
    } catch (err) {
      console.error("Error analyzing email", err)
    } finally {
      setLoading(false)
    }
  }

  return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
         <Navbar />
         <div>
          <div className='text-center mt-8'>
              <h2 className='text-4xl text-gray-900'>Welcome to your email analyzing script!</h2>
              <p className='max-w-[40rem] mx-auto text-gray-600 mt-4'>The usage of our platform consists on managing your recived emails between those who need a urgency and those who are able to keep on waiting.</p>
          </div>
          <EmailInput onAnalyze={analyzeEmail} loading={loading}/>
         </div>
         <AnalyzeResults results={results}/>
      </div>
        

  )
}

export default App
