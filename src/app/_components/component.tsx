'use client'

export const Component = () => {
  console.log(process.env)

  return (
    <div>
      <h1>Component</h1>

     999 {process.env.NEXT_PUBLIC_API_URL} 999
    </div>
  )
}