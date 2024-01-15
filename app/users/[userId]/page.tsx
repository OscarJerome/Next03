import getUser from "@/lib/getUser"
import type { Metadata } from 'next'
import getUserPosts from "@/lib/getUserPosts"
import UserPosts from "./component/UserPosts"
import { Suspense } from "react"

type Params = {
    params:{
        userId:string
    }
}

export async function generateMeta({ params: { userId } }: Params): Promise<Metadata> {
   {/* @ts-expect-error Server */}
  const userData: Promise<User> = getUser(userId)
  const user: User = await userData
  return {
    title: user.name,
    description:`This is the page of ${user.name}`
  }
}
export default async function UserPage({params:{userId}}:Params) {
     {/* @ts-expect-error Server */}
    const userData:Promise<User>   = getUser(userId)
     {/* @ts-expect-error Server */}
    const userPostsData:Promise<Post[]>  = getUserPosts(userId)

    // const [user,userPosts] = await Promise.all([UserData,UserPostsData])

    const user = await userData;
  return (
    <div>
      <>
      <h2>{user.name}</h2>

      <br />
      <Suspense fallback = {<h2>Loading ......</h2>}>
       
      <UserPosts  promise  ={userPostsData} />

      </Suspense>
      </>
    </div>
  )
}
