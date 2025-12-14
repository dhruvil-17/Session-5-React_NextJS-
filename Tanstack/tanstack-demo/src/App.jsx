import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Posts />
    </QueryClientProvider>
  )
}

function Posts() {
  const { data, isLoading, isError, error, isFetching } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      return res.json();
    },
  });

  if (isLoading) return <h3>Loading posts...</h3>;
  if (isError) return <h3>Error: {error.message}</h3>;

  return (
    <>
      <h2>Posts</h2>

      {isFetching && <p>Refreshing in background...</p>}

      <ul>
        {data.slice(0, 5).map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
}

