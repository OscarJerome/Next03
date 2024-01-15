
export default async function getUser(userId:string) {

    const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    if(!resp.ok) throw new Error('Failed to fetch User')
  return resp.json
}
