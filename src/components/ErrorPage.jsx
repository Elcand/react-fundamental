import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  return <div>Error Cik!!</div>
}

export default ErrorPage;