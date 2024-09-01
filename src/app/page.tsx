// import styles from './page.module.css'
import { client } from '../../libs/client'

export default async function Home() {
  const data = await client.get({
    endpoint: 'blog',
  })

  return (
    <main>
      <h1>h1: サイト名</h1>
      <h2>h2: サイト名</h2>
      <p>{data.title}</p>
    </main>
    /*
    <main className={styles.main}>
      <div className={styles.center}>{data.title}</div>
    </main>
    */
  )
}
