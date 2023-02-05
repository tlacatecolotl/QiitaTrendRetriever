const QIITA_FEED_LINK = "https://qiita.com/popular-items/feed";
const QIITA_API_LINK = `https://api.rss2json.com/v1/api.json?rss_url=${QIITA_FEED_LINK}`;

async function retrieveTrendQiita() {
  try {
    const response = await fetch(QIITA_API_LINK);
    const data = await response.json();
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}
