import { ChatMensage } from '@/app/components/chat-mensage'
import { Card, CardContent } from '@/app/components/ui/card'
import { ChatHeader } from './components/header'

export default function Home() {
  return (
    <div className="flex min-h-screen bg-slate-50 items-center justify-center">
      <Card className="w-[440px]">
        <ChatHeader />

        <CardContent>
          <ChatMensage />
        </CardContent>
      </Card>
    </div>
  )
}
