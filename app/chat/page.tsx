"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import {
  IconDownload,
  IconDots,
  IconLock,
  IconMoodSmile,
  IconPencil,
  IconSend,
  IconTrash,
} from "@tabler/icons-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type Sender = "me" | "team" | "other"

type Message = {
  id: string
  sender: Sender
  name: string
  content: string
  timestamp: string
  edited?: boolean
  reactions?: Record<string, number>
}

type Thread = {
  id: string
  title: string
  isPrivate: boolean
  messages: Message[]
}

const TEAM_OPERATORS = ["Alessio", "Roberto", "Giulia", "Marta"]

const EMOJIS = ["❤️", "🙌", "😊", "😢", "🔥"]

const nowStamp = () =>
  new Date().toLocaleTimeString("it-IT", {
    hour: "2-digit",
    minute: "2-digit",
  })

const teamName = (operator: string) => `Team Kintsugi - ${operator}`

const pickOperator = () =>
  TEAM_OPERATORS[Math.floor(Math.random() * TEAM_OPERATORS.length)]

const initialThreads: Thread[] = [
  {
    id: "public",
    title: "Chat pubblico",
    isPrivate: false,
    messages: [
      {
        id: "m1",
        sender: "team",
        name: teamName("Alessio"),
        content:
          "Benvenutə! Se vuoi raccontarci qualcosa o chiedere informazioni, siamo qui.",
        timestamp: nowStamp(),
      },
      {
        id: "m2",
        sender: "me",
        name: "Anonimo",
        content: "Ciao! Vorrei capire meglio i vostri percorsi.",
        timestamp: nowStamp(),
      },
      {
        id: "m3",
        sender: "team",
        name: teamName("Roberto"),
        content:
          "Ti rispondiamo con piacere. Vuoi parlare di eventi, laboratori o sostegno?",
        timestamp: nowStamp(),
      },
    ],
  },
]

export default function ChatPage() {
  const [threads, setThreads] = useState<Thread[]>(initialThreads)
  const [activeThreadId, setActiveThreadId] = useState("public")
  const [draft, setDraft] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [isTyping, setIsTyping] = useState(false)

  const inputRef = useRef<HTMLTextAreaElement | null>(null)
  const scrollRef = useRef<HTMLDivElement | null>(null)

  const activeThread = useMemo(
    () => threads.find((thread) => thread.id === activeThreadId) ?? threads[0],
    [activeThreadId, threads]
  )

  const hasPrivateThread = threads.some((thread) => thread.isPrivate)

  const updateThreadMessages = (
    threadId: string,
    updater: (messages: Message[]) => Message[]
  ) => {
    setThreads((prev) =>
      prev.map((thread) =>
        thread.id === threadId
          ? { ...thread, messages: updater(thread.messages) }
          : thread
      )
    )
  }

  const scrollToBottom = () => {
    if (!scrollRef.current) return
    scrollRef.current.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    })
  }

  const simulateTeamReply = (content?: string) => {
    setIsTyping(true)
    const response = content ?? "Grazie per il messaggio! Ti rispondiamo a breve."
    window.setTimeout(() => {
      updateThreadMessages(activeThread.id, (messages) => [
        ...messages,
        {
          id: crypto.randomUUID(),
          sender: "team",
          name: teamName(pickOperator()),
          content: response,
          timestamp: nowStamp(),
        },
      ])
      setIsTyping(false)
    }, 1400)
  }

  const handleSend = () => {
    const trimmed = draft.trim()
    if (!trimmed) {
      setError("Scrivi un messaggio prima di inviare.")
      return
    }
    if (trimmed.length > 600) {
      setError("Il messaggio è troppo lungo.")
      return
    }

    setError(null)

    if (editingId) {
      updateThreadMessages(activeThread.id, (messages) =>
        messages.map((message) =>
          message.id === editingId
            ? { ...message, content: trimmed, edited: true }
            : message
        )
      )
      setEditingId(null)
      setDraft("")
      return
    }

    updateThreadMessages(activeThread.id, (messages) => [
      ...messages,
      {
        id: crypto.randomUUID(),
        sender: "me",
        name: "Anonimo",
        content: trimmed,
        timestamp: nowStamp(),
      },
    ])
    setDraft("")
    simulateTeamReply()
  }

  const handleEdit = (message: Message) => {
    if (message.sender !== "me") return
    setEditingId(message.id)
    setDraft(message.content)
    requestAnimationFrame(() => inputRef.current?.focus())
  }

  const handleDelete = (messageId: string) => {
    updateThreadMessages(activeThread.id, (messages) =>
      messages.filter((message) => message.id !== messageId)
    )
  }

  const handleReact = (messageId: string, emoji: string) => {
    updateThreadMessages(activeThread.id, (messages) =>
      messages.map((message) => {
        if (message.id !== messageId) return message
        const next = { ...(message.reactions ?? {}) }
        next[emoji] = (next[emoji] ?? 0) + 1
        return { ...message, reactions: next }
      })
    )
  }

  const startPrivateChat = () => {
    if (hasPrivateThread) return
    const threadId = `private-${Date.now()}`
    setThreads((prev) => [
      ...prev,
      {
        id: threadId,
        title: "Chat privata",
        isPrivate: true,
        messages: [],
      },
    ])
    setActiveThreadId(threadId)
  }

  const downloadChat = () => {
    const header = `${activeThread.title} (${activeThread.isPrivate ? "Privata" : "Pubblica"})\n`
    const lines = activeThread.messages.map((message) => {
      const editedTag = message.edited ? " (modificato)" : ""
      return `[${message.timestamp}] ${message.name}${editedTag}: ${message.content}`
    })
    const blob = new Blob([header, lines.join("\n")], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const anchor = document.createElement("a")
    anchor.href = url
    anchor.download = `kintsugi-chat-${activeThread.id}-${new Date()
      .toISOString()
      .slice(0, 10)}.txt`
    anchor.click()
    URL.revokeObjectURL(url)
  }

  useEffect(() => {
    scrollToBottom()
  }, [activeThread.messages.length, isTyping])

  useEffect(() => {
    if (activeThread.id !== "public") return
    const timer = window.setInterval(() => {
      if (document.hidden) return
      setIsTyping(true)
      window.setTimeout(() => {
        updateThreadMessages(activeThread.id, (messages) => [
          ...messages,
          {
            id: crypto.randomUUID(),
            sender: "other",
            name: "Anonimo",
            content: "Grazie per il supporto, mi sento ascoltato.",
            timestamp: nowStamp(),
          },
        ])
        setIsTyping(false)
      }, 1200)
    }, 30000)
    return () => window.clearInterval(timer)
  }, [activeThread.id])

  return (
    <div className="page-bg">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 lg:px-8">
        <Card className="section-panel">
          <CardHeader className="gap-4 border-b border-white/60">
            <div className="flex flex-col gap-2">
              <CardTitle className="text-2xl font-semibold text-stone-900">
                Chat
              </CardTitle>
              <CardDescription>
                Condividi in modo anonimo e ricevi risposte dal Team Kintsugi in
                tempo reale.
              </CardDescription>
            </div>
            <CardAction className="flex flex-wrap items-center gap-2">
              <Badge variant="secondary">
                {activeThread.isPrivate ? "Sessione privata" : "Chat pubblica"}
              </Badge>
              <Select
                value={activeThread.id}
                onValueChange={(value) => setActiveThreadId(value)}
              >
                <SelectTrigger size="sm">
                  <SelectValue placeholder="Seleziona chat" />
                </SelectTrigger>
                <SelectContent>
                  {threads.map((thread) => (
                    <SelectItem key={thread.id} value={thread.id}>
                      {thread.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button
                variant="outline"
                size="sm"
                onClick={startPrivateChat}
                disabled={hasPrivateThread}
              >
                <IconLock className="mr-1.5 size-4" />
                Chat privata
              </Button>
              <Button variant="secondary" size="sm" onClick={downloadChat}>
                <IconDownload className="mr-1.5 size-4" />
                Scarica
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent className="pt-6">
            <div
              ref={scrollRef}
              className="h-[60vh] min-h-[360px] overflow-y-auto pr-2"
            >
              {activeThread.messages.length === 0 && !isTyping && (
                <div className="flex h-full flex-col items-center justify-center gap-2 text-center text-sm text-muted-foreground">
                  <div className="flex size-12 items-center justify-center rounded-full bg-white/80 text-stone-500 shadow-sm">
                    <IconDots className="size-6" />
                  </div>
                  <p>Nessun messaggio ancora. Inizia tu la conversazione.</p>
                </div>
              )}

              <div className="flex flex-col gap-4">
                {activeThread.messages.map((message) => {
                  const isMine = message.sender === "me"
                  const isTeam = message.sender === "team"
                  const align =
                    message.sender === "team" ? "justify-start" : "justify-end"
                  const bubbleStyle = isMine
                    ? "bg-amber-200/70 text-stone-900"
                    : isTeam
                    ? "bg-white/90 text-stone-900 border border-amber-100"
                    : "bg-stone-100 text-stone-900"
                  return (
                    <div key={message.id} className={`flex ${align}`}>
                      <div className="flex max-w-[85%] flex-col gap-1">
                        <div className="text-xs uppercase tracking-[0.16em] text-stone-500">
                          {message.name}
                        </div>
                        <div
                          className={`rounded-2xl px-4 py-3 text-sm shadow-sm ${bubbleStyle}`}
                        >
                          <p>{message.content}</p>
                          <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-stone-500">
                            <span>{message.timestamp}</span>
                            {message.edited && <span>• modificato</span>}
                          </div>
                        </div>
                        <div className="flex flex-wrap items-center gap-2">
                          {message.reactions &&
                            Object.entries(message.reactions).map(
                              ([emoji, count]) => (
                                <span
                                  key={`${message.id}-${emoji}`}
                                  className="rounded-full bg-white/80 px-2 py-1 text-xs shadow-sm"
                                >
                                  {emoji} {count}
                                </span>
                              )
                            )}
                        </div>
                      </div>
                      <div className="ml-2 mt-6 flex flex-col items-center gap-2">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon-xs">
                              <IconMoodSmile className="size-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            {EMOJIS.map((emoji) => (
                              <DropdownMenuItem
                                key={`${message.id}-${emoji}`}
                                onClick={() => handleReact(message.id, emoji)}
                              >
                                {emoji} Reagisci
                              </DropdownMenuItem>
                            ))}
                          </DropdownMenuContent>
                        </DropdownMenu>
                        {message.sender === "me" && (
                          <>
                            <Button
                              variant="ghost"
                              size="icon-xs"
                              onClick={() => handleEdit(message)}
                            >
                              <IconPencil className="size-4" />
                            </Button>
                            <AlertDialog>
                              <AlertDialogTrigger asChild>
                                <Button
                                  variant="ghost"
                                  size="icon-xs"
                                >
                                  <IconTrash className="size-4 text-destructive" />
                                </Button>
                              </AlertDialogTrigger>
                              <AlertDialogContent>
                                <AlertDialogHeader>
                                  <AlertDialogTitle>
                                    Eliminare il messaggio?
                                  </AlertDialogTitle>
                                  <AlertDialogDescription>
                                    Puoi eliminare solo i messaggi inviati da te.
                                  </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                  <AlertDialogCancel>
                                    Annulla
                                  </AlertDialogCancel>
                                  <AlertDialogAction
                                    onClick={() => handleDelete(message.id)}
                                  >
                                    Elimina
                                  </AlertDialogAction>
                                </AlertDialogFooter>
                              </AlertDialogContent>
                            </AlertDialog>
                          </>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>

              {isTyping && (
                <div className="mt-6 flex items-center gap-2 text-xs text-stone-500">
                  <div className="flex items-center gap-1 rounded-full bg-white/80 px-3 py-1 shadow-sm">
                    <span className="size-1.5 animate-bounce rounded-full bg-stone-400" />
                    <span className="size-1.5 animate-bounce rounded-full bg-stone-400 [animation-delay:120ms]" />
                    <span className="size-1.5 animate-bounce rounded-full bg-stone-400 [animation-delay:240ms]" />
                  </div>
                  <span>Team Kintsugi sta scrivendo…</span>
                </div>
              )}
            </div>
          </CardContent>
          <Separator />
          <CardFooter className="flex flex-col items-stretch gap-3">
            {editingId && (
              <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl bg-amber-50 px-3 py-2 text-xs text-stone-600">
                <span>Stai modificando un messaggio.</span>
                <Button
                  variant="ghost"
                  size="xs"
                  onClick={() => {
                    setEditingId(null)
                    setDraft("")
                  }}
                >
                  Annulla modifica
                </Button>
              </div>
            )}
            <Textarea
              ref={inputRef}
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter" && !event.shiftKey) {
                  event.preventDefault()
                  handleSend()
                }
              }}
              placeholder="Scrivi un messaggio…"
              className="min-h-[96px] resize-none bg-white/90"
            />
            {error && (
              <div className="rounded-lg bg-destructive/10 px-3 py-2 text-xs text-destructive">
                {error}
              </div>
            )}
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-xs text-muted-foreground">
                Invio con Enter • Nuova linea con Shift+Enter
              </span>
              <Button onClick={handleSend}>
                <IconSend className="mr-1.5 size-4" />
                {editingId ? "Salva" : "Invia"}
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
