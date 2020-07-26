import React, { useEffect } from "react";
import { render } from "react-dom";
import { Button } from '@material-ui/core';
import { ApolloProvider } from '@apollo/client';

import {
    ApolloClient,
    InMemoryCache,
    useQuery,
    gql
} from '@apollo/client';

import { SETTINGS_QUERY } from '../data/settings';

const client = new ApolloClient({
    uri: document.getElementsByTagName('meta').gql.content,
    cache: new InMemoryCache()
});

const App = () => {
    const { loading, error, data } = useQuery(SETTINGS_QUERY);
    if (loading) return <p>Loading...</p>;
    if (error) {
        console.error(error);
        return <p>Failed to load data.</p>;
    }

    return (
      <div>
        <ul>
        {data.appSettings.map(s =>
            <SettingItem key={s.id} setting={s} />
        )}
        </ul>
        <Button variant="contained" color="primary">Hi!</Button>
      </div>
    );
};

const SettingItem = (props) => {
    let { id, name, type, value } = props.setting;
    return(<li key={id}>{name}: {value}</li>);
};

export default App;
const container = document.getElementById("app");
render(<ApolloProvider client={client}><App /></ApolloProvider>, container);