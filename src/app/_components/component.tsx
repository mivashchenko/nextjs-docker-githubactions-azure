'use client'

export const Component = () => {
  console.log(process.env)

  return (
    <div>
      <h1>Component</h1>

     13 {process.env.NEXT_PUBLIC_API_URL} ,

     {process.env.NEXT_PUBLIC_API_URL_1}
    </div>
  )
}