import Link from 'next/Link'

export default () => (
    <ul>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <style jsx>{`
          a {
            margin-right: 5vh;
            color: purple;
            text-decoration: none;
          }
        `}
        </style>

    </ul>
  )