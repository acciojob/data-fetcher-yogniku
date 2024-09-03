import React, { useEffect, useState } from "react";

import './../styles/App.css';

 

const App = () => {

  const [text, setText] = useState(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

 

  useEffect(() => {

    fetch("https://dummyjson.com/products")

      .then((response) => {

        if (!response.ok) {

          throw new Error("Network response was not ok");

        }

        return response.json();

      })

      .then((json) => {

        setText(json);

        setLoading(false);

      })

      .catch((error) => {

        setError(error.message);

        setLoading(false);

      });

  }, []);

 

  if (loading) {

    return <h1>Loading...</h1>;

  }

 

  if (error) {

    return <h1>An error occurred: {error}</h1>;

  }

 

  return (

    <div>

      <h1>

      Data Fetched from API

      </h1>

 

      <pre>

        {JSON.stringify(text, null, 2)}

      </pre>

    </div>

  );

};

 

export default App;
