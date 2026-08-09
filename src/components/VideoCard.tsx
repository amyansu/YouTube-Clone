export function VideoCard({
  thumbImage,
  image,
  title,
  author,
  views,
  timestamp,
}: {
  thumbImage: string;
  image: string;
  title: string;
  author: string;
  views: string;
  timestamp: string;
}) {
  return (
    <div className="p-3">
      <img src={thumbImage} className="rounded-xl" alt="" />
      <div className="grid grid-cols-12 pt-2">
        <div className="col-span-1">
          <img className={"rounded-full w-15 h-15"} src={image} alt="" />
        </div>
        <div className="col-span-11 pl-2">
          <div>{title}</div>
          <div className="text-base text-gray-400">{author}</div>
          <div className="text-base text-gray-400">
            {views} . {timestamp}
          </div>
        </div>
      </div>
    </div>
  );
}
