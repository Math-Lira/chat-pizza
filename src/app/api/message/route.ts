// /app/api/message/route.ts
import { generateResponse } from '@/app/lib/iaAgente'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { message, sessionId } = await request.json()

    if (!message || !sessionId) {
      return NextResponse.json(
        { error: 'Message and Session ID are required.' },
        { status: 400 },
      )
    }

    const botResponse = await generateResponse(message, sessionId)

    return NextResponse.json({ response: botResponse }, { status: 200 })
  } catch (error) {
    // <-- Adicione este bloco 'catch'
    console.error('Error in API route:', error)
    return NextResponse.json(
      { error: 'Internal Server Error', details: (error as Error).message },
      { status: 500 },
    )
  }
}
