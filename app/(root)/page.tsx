import { auth } from '@/auth';

const Home = async () => {
  const session = await auth();

  return (
    <>
      <h1 className="h1-bold font-black">
        Welcome to the World of Next.js
      </h1>
    </>
  );
}

export default Home;
