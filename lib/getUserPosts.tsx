

export default async function getUserPosts(userId:string) {

    const resp = await fetch(`https://jsonplaceholder.typicode.com/posts?userId = ${userId}`)
    if(!resp.ok) throw new Error('Failed to fetch User')
  return resp.json
}
