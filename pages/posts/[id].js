import { useRouter } from 'next/router'
import {useEffect} from 'react'
import GhostContentAPI from '@tryghost/content-api';

export default function Post({ post }) {

    useEffect(()=> {
        console.log(post)
    }, [])
  const router = useRouter()
  if (router.isFallback) {
    return <div>Loading...</div>
  }
  return (
    <div>
      <h1 className="text-5xl mt-4 font-semibold tracking-wide">{post.title}</h1>
      <p className="text-sm font-light my-4">by {post.user_email}</p>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  )
}

//This page uses getStaticPaths to dynamically create pages at build time based on 
//the posts coming back from the API.

export async function getStaticPaths() {

    const api = new GhostContentAPI({
        url: process.env.NEXT_PUBLIC_GHOST_URL,
        key: process.env.NEXT_PUBLIC_GHOST_API_KEY,
        version: 'v4',
      });

    const getPosts = await api.posts.browse()
  
    const paths = getPosts.map(post => (
        { 
            params: { 
                id: JSON.stringify(post.id) 
        }
    }))
    return {
        paths,
        fallback: true
    }
}

//We use getStaticProps to enable the Post data to be fetched
// and then passed into the page as props at build time.

export async function getStaticProps ({ params }) {
    const api = new GhostContentAPI({
        url: process.env.NEXT_PUBLIC_GHOST_URL,
        key: process.env.NEXT_PUBLIC_GHOST_API_KEY,
        version: 'v4',
      });
  
  const { id } = params

  const singlePost = await api.posts.read({ id:id })

  return {
    props: {
      post: singlePost
    }
  }
}