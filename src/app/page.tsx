import styles from './page.module.css'
import { client } from '../../libs/client'

export default async function Home() {
  const data = await client.get({
    endpoint: 'blog',
  })

  return (
    <main className={styles.main}>

      <div className={styles.center}>{data.title}</div>
    </main>
  )
}
