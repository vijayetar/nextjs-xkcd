import Link from 'next/link'
import SimpleLayout from '../components/SimpleLayout'

export default function Home(props) {
  return (
    <SimpleLayout>
      <h1>{props.comic.title}</h1>
      <img src = {props.comic.img} alt={props.comic.alt}/>
      <Footer comicNum= {props.comic.num}/>
    </SimpleLayout>
  )
}

export async function getServerSideProps(context) {
  const response = await fetch("http://xkcd.com/info.0.json")
  const data = await response.json();
  return {
    props: {
      comic:data
    }, // will be passed to the page component as props
  }
}

function Footer(props){
  const currentNum = props.comicNum;
  const nums = [];
  for (let n = currentNum; n>currentNum-10; n--){
    nums.push(n)
  }
  return (
    <footer>
      <h2>Previous {nums.length}</h2>
      <ul>
        {nums.map(num => (
            <Link href="/num/[id].js" as={`/num/${num}`} key={num}>
              <a>#{num}</a>
            </Link>
        ))}
      </ul>
      <style jsx>
        {`
        a {margin-right: 5vh}
        `}
      </style>
    </footer>
  )
}
