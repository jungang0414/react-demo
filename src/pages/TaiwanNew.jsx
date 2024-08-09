import { useState } from "react";
import { useNewsFetch } from "../utils/useNewsFetch";

function TaiwanNew() {
  const [country, setCountry] = useState("");
  const { loading, news, fetchNews } = useNewsFetch();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchNews(country);
  };

  return (
    <div className="text-center">
      <h1>THE WORD NEWS</h1>
      <p>臺灣:tw</p>
      <p>日本:jp</p>
      <p>美國:us</p>
      <form className="mt-2" onSubmit={handleSubmit}>
        <input
          className="border rounded-lg p-2"
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          placeholder="Enter country"
        />
        <button className="border p-2 ml-2" type="submit">送出</button>
      </form>
      {loading ? (
        <div>載入中...</div>
      ) : (
        <div className="mt-5 p-5 flex flex-col gap-3">
          {news.articles &&
            news.articles.map((article) => (
              <div key={article.title} className="border rounded-lg">
                <a href={article.url}>
                  <p className="text-lg text-justify mb-2 p-2">
                    {article.title}
                  </p>
                </a>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default TaiwanNew;
