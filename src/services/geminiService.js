import { GoogleGenAI } from '@google/genai'
import env from '../config/env.js'

// Step 1: initialize client
const ai = new GoogleGenAI({ apiKey: env.GEMINI_API_KEY })

const analyzeResume = async (resumeText, jobDomain) => {

  // Step 2: create the propmt 
  const prompt = `
You are an HR expert. Analyze this resume for a "${jobDomain}" internship position.

Resume:
${resumeText}

Give a short analysis in this exact format:
1. Overall Score: X/10
2. Verdict: HIRE or PASS
3. Strengths: (2-3 bullet points)
4. Weaknesses: (1-2 bullet points)
5. Summary: (2-3 lines max)
`

  // Step 3: get response from gemini
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: prompt,
  })

  return response.text
}

export default analyzeResume