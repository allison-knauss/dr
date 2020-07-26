import React from "react";
import { render } from "react-dom";
import { Button } from '@material-ui/core';
import { ApolloProvider } from '@apollo/client';

import { ApolloClient, InMemoryCache } from '@apollo/client';
import { useQuery, gql } from '@apollo/client';
import { useApolloClient } from '@apollo/client';

const client = new ApolloClient({
    uri: 'http://127.0.0.1:8000/gql',
    cache: new InMemoryCache()
});

const SETTINGS_QUERY = gql`
    query GetAppSettings {
        appSettings {
            id, name, type, value
        }
    }
`

const App = () => {
    const { loading, error, data } = useQuery(SETTINGS_QUERY);

    console.log(loading, error, data);

    if (loading) return <p>Loading...</p>;

    return (
      <div>
        <ul>
        {data.appSettings.map(s =>
            <li key={s.id}>{s.name}, {s.type}, {s.value}</li>
        )}
        </ul>
        <Button variant="contained" color="primary">Hi!</Button>
      </div>
    );
};

export default App;
const container = document.getElementById("app");
render(<ApolloProvider client={client}><App /></ApolloProvider>, container);