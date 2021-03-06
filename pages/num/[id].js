import SimpleLayout from '../../components/SimpleLayout'
export default function ComicDetail(props){
  return (
    <SimpleLayout>
      <h1>{props.comic.title}</h1>
      <img src = {props.comic.img} alt={props.comic.alt}></img>
    </SimpleLayout>

  )
}

export async function getServerSideProps(context) {
  const num = context.query.id
  const response = await fetch(`http://xkcd.com/${num}/info.0.json`)
  const data = await response.json();
  return {
    props: {
      comic:data
    }, // will be passed to the page component as props
  }
}