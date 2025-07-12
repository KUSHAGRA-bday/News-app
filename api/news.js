export default async function handler(req, res) {
    const { query } = req.query;
    const apiKey = "da0722985fa54f1a885be4817a174d3b";
    const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&sortBy=publishedAt&pageSize=25&apiKey=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: "Error fetching news" });
    }
}