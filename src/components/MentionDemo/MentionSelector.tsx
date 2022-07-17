import { useEffect, useRef } from 'react'

interface MentionSelectorProps {
  users: { username: string, highlighted: boolean }[]
  onUserClicked: (username: string) => void
}

export default function MentionSelector({ users, onUserClicked }: MentionSelectorProps) {

  const userDivRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const selectedUser = users.find(user => user.highlighted)

  useEffect(() => {
    if (userDivRef.current && containerRef.current) {
      const container = containerRef.current
      container.scroll({ top: userDivRef.current.offsetTop - container.offsetHeight / 2 })
    }
  }, [selectedUser])

  return (
    <div
      ref={containerRef}
      className="py-1 rounded-md bg-blue-200 mb-1 absolute max-h-48 overflow-y-auto z-40 shadow-lg text-slate-700 w-32 bottom-10"
      data-testid="mention-selector"
    >
      {users.map((user, i) => (
        <div
          key={user.username}
          className={`flex items-center hover:bg-blue-300/50 py-1 w-full pl-2 pr-3 cursor-pointer rounded-sm ${user.highlighted ? 'bg-blue-300/50' : ''}`}
          onClick={() => onUserClicked(users[i].username)}
          ref={user.highlighted ? userDivRef : () => { }}
        >
          <div className="mr-2">
            {/* <Avatar size="small" src={user.avatar_url_m} /> */}
          </div>
          <div className="font-medium">
            {user.username}
          </div>
        </div>
      ))}
    </div>
  )
}