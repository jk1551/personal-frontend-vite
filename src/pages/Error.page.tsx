import { useRouteError } from 'react-router-dom';
import { NotFound } from '../components/NotFound/NotFound';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <NotFound />
    </div>
  );
}
