export function EmotionEntry({ entry }) {
  return (
    <>
        <div className="">
          <p>{new Date(entry.createdOn).toLocaleDateString()}</p>
          <p>{entry.type}</p>
          <p>{entry.content}</p>
        </div>
    </>
  );
}
