import React from "react";
// import { downvoteQuote } from "./quotesSlice";
// import { upvoteQuote } from "./quotesSlice";
function QuoteCard({
  id,
  content,
  author,
  downVote,
  upVote,
  handleDelete,
  votes,
}) {
  return (
    <div>
      <div className="card card-inverse card-success card-primary mb-3 text-center">
        <div className="card-block">
          <blockquote className="card-blockquote">
            <p>{content}</p>
            <footer>
              - author <cite title="Source Title">{author}</cite>
            </footer>
          </blockquote>
        </div>
        <div className="float-right">
          <div
            className="btn-group btn-group-sm"
            role="group"
            aria-label="Basic example"
          >
            <button
              type="button"
              className="btn btn-primary upvote"
              title={id}
              onClick={upVote}
            >
              Upvote
            </button>
            <button
              type="button"
              className="btn btn-secondary downvote"
              title={id}
              onClick={downVote}
            >
              Downvote
            </button>
            <button
              type="button"
              className="btn btn-danger"
              title={id}
              onClick={handleDelete}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div>Votes: {votes}</div>
        </div>
      </div>
    </div>
  );
}

export default QuoteCard;
