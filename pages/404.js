import Link from "next/link";
import { Button } from "react-bootstrap";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-[30px] my-4">404 Not found</h1>
      <p>The page you&apos;re looking for was not found.</p>
      <hr className="my-[6]" />
      <div className="flex justify-center center text-[30px] my-6">
        <Link href="/" passHref>
          <Button className="h-full p-2 text-xl rounded-md outline-2 hover:bg-slate-300 hover:bg-opacity-30 outline-white outline">
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
