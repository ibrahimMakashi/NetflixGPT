import { Outlet } from "react-router-dom";
import Header from "./Header";

const Browser = () => {
  return (
    <div className="browse">
      <Header />
      <Outlet/>
    </div>
  );
};

export default Browser;

// const load = async () => {
//   const res = await GetListByKeyword("Jawan trailer", false, 1);
//   const videoId =await res.items[0].id;
//   console.log(videoId)
// };

// useEffect(()=>{
//   load()
// }, [])
