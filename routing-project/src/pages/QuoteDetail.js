import React from "react";
import { Route, Link, useRouteMatch } from "react-router-dom";
import { useParams } from "react-router-dom";
import HighlighedQuote from "../components/quotes/HighlightedQuote";

import Comments from "../components/comments/Comments";

const DUMMY_QUOTES = [
  { id: "q1", author: "Ahsan", text: "Learning React is Fun" },
  { id: "q2", author: "Faiz", text: "Learning React is not Fun" },
  { id: "q3", author: "Alnoor", text: "Quick Win" },
];

function QuoteDetail() {
  const match = useRouteMatch();

  const params = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No quote found!</p>;
  }

  return (
    <section>
      <h1>Quote Details</h1>
      <HighlighedQuote author={quote.author} text={quote.text} />
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments></Comments>
      </Route>
    </section>
  );
}

export default QuoteDetail;
