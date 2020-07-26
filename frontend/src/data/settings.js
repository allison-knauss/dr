import { gql } from '@apollo/client';

export const SETTINGS_QUERY = gql`
    query GetAppSettings {
        appSettings {
            id, name, type, value
        }
    }
`
