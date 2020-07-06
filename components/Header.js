import Link from 'next/link'

export default function Header(props){
  return (
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      
    </ul>
  )
}