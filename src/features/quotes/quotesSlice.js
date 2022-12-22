// Action Creators
export function addQuote(quote) {
  return { type: "quotes/add", payload: quote };
}

export function removeQuote(quoteId) {
  return { type: "quotes/remove", payload: quoteId };
}

export function upvoteQuote(quoteId) {
  return { type: "quotes/upvote", payload: quoteId };
}
export function downvoteQuote(quoteId) {
  return { type: "quotes/downvote", payload: quoteId };
}
// TODO: Create action creators as defined in tests

// Reducer
const initialState = [];

export default function quotesReducer(state = initialState, action) {
  switch (action.type) {
    case "quotes/add":
      return [...state, action.payload];
    case "quotes/remove":
      const remainingQuotes = state.filter(
        (quote) => quote.id !== action.payload
      );
      return remainingQuotes;
    case "quotes/upvote":
      const upQuotes = state.map((quote) => {
        if (quote.id === action.payload) {
          return { ...quote, votes: quote.votes + 1 };
        }
        return quote;
      });
      return upQuotes;
    case "quotes/downvote":
      const downQuotes = state.map((quote) => {
        if (quote.votes === 0) {
          return quote;
        } else if (quote.id === action.payload) {
          return { ...quote, votes: quote.votes - 1 };
        }
        return quote;
      });
      return downQuotes;
    default:
      return state;
  }
}
