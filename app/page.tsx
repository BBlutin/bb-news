import { categories } from '../constants'
import fetchNews from '../lib/fetchNews'
import NewsList from './NewsList';

async function Homepage() {

  let request: Array<string> = []

  categories.forEach(category => {
    request.push(category.type)
  });

  const news: NewsResponse = await fetchNews(request.join(','))

  return (
    <div>
      <NewsList news={news} />
    </div>
  )
}

export default Homepage