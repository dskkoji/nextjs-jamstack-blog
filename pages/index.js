import React from 'react'
import Link from 'next/link'
import { client } from '../libs/client'
import styles from '../styles/Home.module.scss'

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" })
  console.log(data)
  return {
    props: {
      blog: data.contents,
    }
  }
 }
 
export default function Home({ blog }) {
  return (
    <div className={styles.container}>
      <h1>MicroCMS BLOG</h1>
      {blog.map((blog) => (
        <li>
          <Link href={`/blog/${blog.id}`}>
            <a>{blog.title}</a>
          </Link>
        </li>
      ))}
    </div>
  )
}