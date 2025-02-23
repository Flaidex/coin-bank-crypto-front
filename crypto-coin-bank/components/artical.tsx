import Link from "next/link"

export default function RelatedArticles() {
    const articles = [
        {
            title: "1  How Is Changing the Real Estate Industry?",
            date: "Sep 28, 2023",
        },
        {
            title: "2  Why You Should Trade Cryptocurrencies in Coinbank",
            date: "Sep 15, 2023",
        },
        {
            title: "3  Setting the Record Straight: BUSD Auto-Conversion",
            date: "Sep 12, 2023",
        },
        {
            title: "4  BUSD Hits Its $20B Market Cap Milestone",
            date: "Sep 08, 2023",
        },
        {
            title: "5  How to Use Western Pay as a Payment Method on Binance P2P",
            date: "Sep 05, 2023",
        },
    ]

    return (
        <div className="border rounded-lg p-4 lg:p-6 bg-white shadow-md">
            <h3 className="text-lg font-semibold mb-4">Related Articles</h3>
            <div className="space-y-4">
                {articles.map((article, index) => (
                    <article key={index} className="space-y-1">
                        <Link href="#" className="text-sm sm:text-base font-medium text-gray-900 hover:text-primary">
                            {article.title}
                        </Link>
                        <p className="text-xs sm:text-sm text-gray-500">{article.date}</p>
                    </article>
                ))}
            </div>
        </div>
    )
}
