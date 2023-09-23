import { gql } from "@apollo/client";

export const ADD_PROJECT = gql`
  mutation AddProject(
    $name: String!
    $description: String!
    $clientId: ID!
    $status: ProjectStatus!
  ) {
    AddProject(
      name: $name
      description: $description
      status: $status
      clientId: $clientId
    ) {
      id
      name
      description
      status
      client {
        name
        email
        phone
        id
      }
    }
  }
`;
export const UPDATE_PROJECT = gql`
  mutation UpdateProject(
    $name: String!
    $description: String!
    $id: ID!
    $status: ProjectStatusUpdate!
  ) {
    updateProject(
      name: $name
      description: $description
      status: $status
      id: $id
    ) {
      id
      name
      description
      status
      client {
        name
        email
        phone
        id
      }
    }
  }
`;
export const DELETE_PROJECT = gql`
  mutation DeleteProject($id: ID!) {
    deleteProject(id: $id) {
      id
    }
  }
`;
