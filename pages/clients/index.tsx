import Link from "next/link";

/*
  - Link's href can be an object
    - use this to construct dynamic routes
      as it's more convnient  
*/

function ClientsPage() {
  const clients = [
    { id: "arlo", name: "Arlo" },
    { id: "steven", name: "Steven" },
  ];

  return (
    <div>
      <h1>Clients Page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link
              href={{
                pathname: "/clients/[id]",
                query: { id: client.id },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientsPage;
