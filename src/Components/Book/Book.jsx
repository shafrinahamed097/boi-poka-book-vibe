import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { image, bookName, author, rating, category, tags, bookId } = book;
  return (
    <Link to={`/book/${bookId}`}>
      <div className="card bg-base-100 w-96 shadow-xl p-6">
        <figure className="bg-gray-200 py-8 rounded-2xl">
          <img src={image} className="h-[166px]" alt={bookName} />
        </figure>
        <div className="card-body">
          <div className="flex justify-center gap-4">
            {tags.map((tag) => (
              <button className="btn btn-xs bg-green-200 text-green-500">
                {tag}
              </button>
            ))}
          </div>
          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>By: {author}</p>
          <div className="border-t-2 border-dashed m-2"></div>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">{category}</div>
            <div className="rating">
              {rating}

              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
                aria-label="5 star"
                defaultChecked
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
