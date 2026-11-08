
function Article({ title, date = "January 1, 1970", preview, minutes }) {
  const readTime = getReadTime(minutes);

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      {readTime && <small className="read-time"> • {readTime}</small>}
      <p>{preview}</p>
    </article>
  );
}

function getReadTime(minutes) {
  if (minutes == null) return "";

  if (minutes < 30) {
    const cups = Math.ceil(minutes / 5);
    return `${"☕️".repeat(cups)} ${minutes} min read`;
  }

  const boxes = Math.ceil(minutes / 10);
  return `${"🍱".repeat(boxes)} ${minutes} min read`;
}

export default Article;
