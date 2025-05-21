import { Pizza } from 'lucide-react'
import { CardDescription, CardHeader, CardTitle } from './ui/card'

export function ChatHeader() {
  return (
    <div>
      <CardHeader className="mb-2">
        <CardTitle className="font-bold text-2xl flex items-center">
          Chat Pizza
          <Pizza className="ml-2" />
        </CardTitle>
        <CardDescription>Peça sua pizza já!</CardDescription>
      </CardHeader>
    </div>
  )
}
