import getUserPosts from "@/lib/getUserPosts";
type Props = {
    promise :Promise<Post[]>
}

export default async function UserPosts({promise}:Props) {
  const posts = await promise
  
  // const content = posts.map(post => {
  //   return (
  //     <article key={post.id}>
  //        {/* Render post content here */}
  //        <h2>{post.title}</h2>
  //       <p>{post.body}</p>
  //       <br/>
  //      </article>
  //   )
    
  // })
  // return content
  

    let content = null; // Default value for content

if (Array.isArray(posts)) { 
  content = posts.map(post => ( 
    <article key={post.id}>
      {/* Render post content here */}
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </article>
  ));
} else {
  // Handle cases where posts is not an array
  // For instance, display an error message or loading indicator
  content = <p>Error: Posts data is not available.</p>;
}

  return content
}
