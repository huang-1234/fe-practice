import React, { useState, useEffect } from 'react'

import axios from 'axios'

interface postType {
  userId: number
  id: number
  title: string
  body: string
}

function FetchData() {

  const [posts, setPosts] = useState<postType[]>([])
  const [post, setPost] = useState<postType>()
  const [id, setId] = useState('1')

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
      const data: postType[] = res.data
      console.log(data)
      setPosts(data)
    }).catch((rej) => {
      console.log(rej)
    })
  }, [])

  useEffect(() => {
    if (id) {
      axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) => {
        const data: postType = res.data
        console.log(data)
        setPost(data)
      }).catch((err) => {
        console.log(err)
      })
    }
  }, [id])

  return (
    <div>
      <ul>
        {
          posts.map((item) => (
            <li key={item.id} >  {item.title} </li>
          ))
        }
      </ul>
      <input
        type="text"
        value={id}
        onChange={(e) => {
          setId(e.target.value)
        }}
      />
      <div>
        {
          post && post.title
        }
      </div>
    </div>
  )
}
export default FetchData



export function FetchDataByid() {
  const [post, setPost] = useState<postType>()
  const [id, setId] = useState('1')

  useEffect(() => {
    if (id) {
      axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) => {
        const data: postType = res.data
        console.log(data)
        setPost(data)
      }).catch((err) => {
        console.log(err)
      })
    }
  }, [id])

  return (
    <div>
      <input
        type="text"
        value={id}
        onChange={(e) => {
          setId(e.target.value)
        }}
      />
      <div>
        {
          post && post.title
        }
      </div>
    </div>
  )
}
