import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Mince,</h1>
      <p>Un probleme est survenu, surement une page inexistante ou un probleme d'url</p>
      <p className="error-message">
        <h4>Erreur:</h4>
        <i>{error.statusText || error.message}</i>
      </p>
      <p>Autant ne pas s'attarder ici et revenir à la page d'acceuil</p>
      <a href={`home`} className="button">Home</a>
    
      <style jsx="true">{`
          .button {
            padding: 7px;
            background-color: #ddd1d1;
            border-radius: 15px;
          }
          
          .error-message{
            background-color: #f64f4f;
          }
      `}
      </style>
    </div>

  );
}