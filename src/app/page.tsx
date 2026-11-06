'use client'

import { useState } from 'react'
import { submitContactForm } from '@/actions/contact'

export default function Home() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const [warningMsg, setWarningMsg] = useState('')
  const [loading, setLoading] = useState(false)

  const isValidEmail = (val: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('')
    setErrorMsg('')
    setWarningMsg('')

    // Client-side validation checks
    if (!name.trim() || !email.trim() || !message.trim()) {
      setErrorMsg('All fields are required.')
      return
    }

    if (!isValidEmail(email)) {
      setErrorMsg('Please enter a valid email address.')
      return
    }

    if (message.length < 5) {
      setErrorMsg('Message must be at least 5 characters long.')
      return
    }

    setLoading(true)
    setStatus('Sending...')

    const result = await submitContactForm({ name, email, message })

    setLoading(false)

    if (!result.success) {
      setErrorMsg(result.error || 'Failed to send message.')
      setStatus('')
    } else {
      setStatus('Message sent successfully!')
      if (result.warning) {
        setWarningMsg(result.warning)
      }
      setName('')
      setEmail('')
      setMessage('')
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gray-50">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md border border-gray-200">
        <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">Contact Us</h1>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-black focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-black focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-black focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition font-medium disabled:bg-blue-300"
          >
            {loading ? 'Sending...' : 'Submit'}
          </button>
        </form>

        {errorMsg && <p className="mt-4 text-center text-sm font-medium text-red-600">{errorMsg}</p>}
        {status && <p className="mt-4 text-center text-sm font-medium text-green-600">{status}</p>}
        {warningMsg && <p className="mt-2 text-center text-xs text-amber-600">{warningMsg}</p>}
        
        <div className="mt-6 text-center">
          <a href="/admin" className="text-sm text-blue-600 hover:underline">View Admin Dashboard &rarr;</a>
        </div>
      </div>
    </main>
  )
}