import React from "react";
import { useDispatch, useSelector } from "react-redux";
import QuoteCard from "./QuoteCard";
import { downvoteQuote, removeQuote, upvoteQuote } from "./quotesSlice";

function Quotes() {
  const quotes = useSelector((state) => state.quotes);
  const dispatch = useDispatch();

  function handleDownVote(event) {
    const id = event.target.title;
    dispatch(downvoteQuote(id));
  }

  function handleUpVote(event) {
    const id = event.target.title;
    dispatch(upvoteQuote(id));
  }

  function handleDelete(event) {
    const id = event.target.title;
    dispatch(removeQuote(id));
  }

  return (
    <div>
      <hr />
      <div className="row justify-content-center">
        <h2 className="text-center">Quotes</h2>
      </div>
      <hr />
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            {quotes.map((quote) => (
              <QuoteCard
                key={quote.id}
                id={quote.id}
                content={quote.content}
                author={quote.author}
                downVote={handleDownVote}
                upVote={handleUpVote}
                handleDelete={handleDelete}
                votes={quote.votes}
              />
            ))}
            {/*
              TODO:

              Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes
              */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quotes;
