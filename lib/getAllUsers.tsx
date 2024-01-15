

export default async function getAllUsers() {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users')
    if(!resp.ok) throw new Error("Failed to fetch data.")
  
    return resp.json()
}
