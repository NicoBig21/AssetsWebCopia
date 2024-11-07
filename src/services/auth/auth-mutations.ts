import { gql } from "@apollo/client";

const LOGIN = gql`
mutation LoginClient($loginClientInput: LoginClientInput!) {
  LoginClient(loginClientInput: $loginClientInput) {
    token
    user {
      id
      user_id
      name
      last_name
      email
      current_client {
        mongo_id
        client_id
      }
    }
  }
}
` 

export default {
    LOGIN
}