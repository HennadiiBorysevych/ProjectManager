import { useQuery } from "@apollo/client";
import { GET_CLIENTS } from "../queries/ClientsQuery";

import ClientRow from "./ClientRow";
import Spinner from "./Spinner";
export const Clients = () => {
  
  const { data, loading, error } = useQuery(GET_CLIENTS);

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <p>Something went wrong</p>;
  }


  return (
    <div>
      {!loading && !error && (
        <table className="table table-hover mt-3">
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.clients.map((client) => (
              <ClientRow key={client.id} {...client}></ClientRow>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
