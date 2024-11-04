import { formatDate } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { FaRegEye } from "react-icons/fa";

const Startupcard = ({ post }) => {
  return (
    <li className="startup-card group">
      <div className="flex justify-between">
        <p className="starup_card_date">{formatDate(post._createdAt)}</p>
        <div className="flex gap-1.5">
          <FaRegEye className="size-6 text-primary" />

          <span>{post.views}</span>
        </div>
      </div>

      <div className="flex justify-between mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/user/${post.author?._id}`}>
          <p className="text-16-medium line-clamp-1"> {post.author?.name}
          </p>
          </Link>
        </div>

      </div>
    </li>
  );
};

export default Startupcard;
