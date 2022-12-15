
import { notFound } from "next/navigation"

type Props = {
    searchParams?: Article;
}

function ArticlePage({ searchParams }: Props) {

    if (
        (searchParams && Object.entries(searchParams).length === 0) ||
        !searchParams
    ) {
        return notFound();
    }

    const article: Article = searchParams;

    return (
        <article className="mt-4">
            <section className="flex flex-col px-0 pb-24 lg:flex-row lg:px-10">
                {article.image && (
                    <img
                        className="object-cover max-w-sm mx-auto rounded-lg shadow-md h-50 sm:max-w-md md:max-w-lg lg:max-w-xl"
                        src={article.image}
                        alt={article.title} 
                    />
                )}
                <div className="px-10">
                    <h1 className="px-0 pt-6 pb-6 no-underline headerTitle lg:pt-0">
                        {article.title}
                    </h1>
                    <div className="flex space-x-4 divide-x-2">
                        <h2 className="font-bold">Par: {article.author || "Inconnu"}</h2>
                        <h2 className="pl-4 font-bold">Source: {article.source}</h2>
                        <p className="pl-4">{article.published_at}</p>
                    </div>
                    <p className="pt-6">{article.description}</p>
                </div>
            </section>
        </article>
    )
}

export default ArticlePage