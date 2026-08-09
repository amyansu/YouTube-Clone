import { VideoCard } from "./VideoCard";

const VIDEOS = [
  {
    thumbImage: "photo.jpg",
    image: "photo2.jpg",
    title:
      "Coading a SASS Platform in 6 hours - NextJS, Tailwind, Prisma, Postgres !!",
    author: "Harkirat Singh",
    views: "100k views",
    timestamp: "1 year ago",
  },
  {
    thumbImage: "photo.jpg",
    image: "photo2.jpg",
    title:
      "Coading a SASS Platform in 6 hours - NextJS, Tailwind, Prisma, Postgres !!",
    author: "Harkirat Singh",
    views: "100k views",
    timestamp: "1 year ago",
  },
  {
    thumbImage: "photo.jpg",
    image: "photo2.jpg",
    title:
      "Coading a SASS Platform in 6 hours - NextJS, Tailwind, Prisma, Postgres !!",
    author: "Harkirat Singh",
    views: "100k views",
    timestamp: "1 year ago",
  },
  {
    thumbImage: "photo.jpg",
    image: "photo2.jpg",
    title:
      "Coading a SASS Platform in 6 hours - NextJS, Tailwind, Prisma, Postgres !!",
    author: "Harkirat Singh",
    views: "100k views",
    timestamp: "1 year ago",
  },
  {
    thumbImage: "photo.jpg",
    image: "photo2.jpg",
    title:
      "Coading a SASS Platform in 6 hours - NextJS, Tailwind, Prisma, Postgres !!",
    author: "Harkirat Singh",
    views: "100k views",
    timestamp: "1 year ago",
  },
  {
    thumbImage: "photo.jpg",
    image: "photo2.jpg",
    title:
      "Coading a SASS Platform in 6 hours - NextJS, Tailwind, Prisma, Postgres !!",
    author: "Harkirat Singh",
    views: "100k views",
    timestamp: "1 year ago",
  },
  {
    thumbImage: "photo.jpg",
    image: "photo2.jpg",
    title:
      "Coading a SASS Platform in 6 hours - NextJS, Tailwind, Prisma, Postgres !!",
    author: "Harkirat Singh",
    views: "100k views",
    timestamp: "1 year ago",
  },
  {
    thumbImage: "photo.jpg",
    image: "photo2.jpg",
    title:
      "Coading a SASS Platform in 6 hours - NextJS, Tailwind, Prisma, Postgres !!",
    author: "Harkirat Singh",
    views: "100k views",
    timestamp: "1 year ago",
  },
];

export const VideoGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {VIDEOS.map((video) => (
        <div>
          <VideoCard
            thumbImage={video.thumbImage}
            image={"photo2.jpg"}
            title={
              "Coading a SASS Platform in 6 hours - NextJS, Tailwind, Prisma, Postgres !!"
            }
            author={"Harkirat Singh"}
            views={"100k views"}
            timestamp={"1 year ago"}
          />
        </div>
      ))}
    </div>
  );
};