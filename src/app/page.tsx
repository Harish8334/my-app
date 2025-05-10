import Image from "next/image";
import Movies from "./movies";
import MovieInput from "./movieInput";
import Login from "../../login";

export default function Home() {
  return (
   <div className="flex justify-center items-center h-screen">
   <Login></Login>
   </div>
  );
}
