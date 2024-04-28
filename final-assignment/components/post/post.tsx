import Link from "next/link";

interface ListPostProps {
  title: string;
  content: string;
  id: number;
  created_at: Date;
}

export default function ListPost({
  title,
  created_at,
  content,
  id,
}: ListPostProps) {
  return (
    <Link href={`/tweet/${id}`} className="flex gap-5">
      <div className="flex flex-col gap-1 *:text-white">
        <span className="text-lg">{title}</span>
        <span className="">{content}</span>
        <span className="text-sm text-neutral-500">
          {created_at.toDateString()}
        </span>
      </div>
    </Link>
  );
}
