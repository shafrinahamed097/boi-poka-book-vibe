import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const BooksDetails = () => {
  const { bookId } = useParams();
  const id = parseInt(bookId);

  const data = useLoaderData();
  const book = data.find((book) => book.bookId === id);

  const {
    bookId: currentBookId,
    image,
    bookName,
    author,
    tags,
    review,
    totalPages,
    publisher,
    yearOfPublishingf,
    rating,
  } = book;
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">{bookName}</h1>
          <p>By: {author}</p>
          <div className="border-t-2 border-dashed m-2"></div>
          <div className="flex gap-4">
            {tags.map((tag, index) => (
              <button key={index}>{tag}</button>
            ))}
          </div>
          <div className="border-t-2 border-dashed m-2"></div>
          <h2 className="py-6">
            <span className="font-bold">Review</span> {review}
          </h2>
          <div className="flex gap-4">
            {tags.map((tag, index) => (
              <button className="bg-green-800 text-white" key={index}>
                {" "}
                #{tag}
              </button>
            ))}
          </div>
          <div className="border-t-2 border-dashed m-2"></div>
          <div>
            <h2 className=" text-white">Number of Pages: {totalPages}</h2>
            <h2 className=" text-white">Publisher: {publisher}</h2>
            <h2 className=" text-white">
              Year of Publishing: {yearOfPublishingf}
            </h2>
            <h2 className=" text-white">Rating: {rating}</h2>
          </div>
          <div className="mt-4">
            <button className="btn btn-outline btn-accent text-white mr-4">
              Read
            </button>
            <button className="btn btn-accent text-white">Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BooksDetails;
