import Article from "./Article"

type Props = {
    news: NewsResponse
}

function NewsList({news}: Props) {
  return (
    <section className="grid grid-cols-1 gap-10 p-10 md:grid-cols-2 lg:grid-cols-3">
        {news.data.map(article => (
            <Article key={article.title} article={article} />
        ))}
    </section>
  )
}

export default NewsList