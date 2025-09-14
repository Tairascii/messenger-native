export const messageTime = (createdAt?: string): string => {
  if (!createdAt) return ''
  const date = new Date(createdAt)
  const now = new Date()

  const isToday =
    date.getDate() === now.getDate() &&
    date.getMonth() === now.getMonth() &&
    date.getFullYear() === now.getFullYear()

  if (isToday) {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  } else {
    return date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
    })
  }
}
