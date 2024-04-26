import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  //   const [data, setData] = useState([]);

  //   useEffect(() => {
  //     fetch("https://api.github.com/users/zain-009")
  //       .then((response) => response.json())
  //       .then((data) => setData(data));
  //   }, []);

  return (
    <div className="flex flex-col items-center bg-slate-800 mx-64 my-4 py-5 text-white font-bold text-3xl gap-y-5 rounded-xl shadow-xl">
      <img
        src={data ? data.avatar_url : ""}
        className="h-44 rounded-full outline outline-white"
        alt="github_pic"
      />
      <div>{data ? "data.name" : "not fetched"}</div>
      Github Followers: {data ? data.followers : "not fetched"}
    </div>
  );
}

export default Github;

export const githubLoader = async () => {
  const responce = await fetch("https://api.github.com/users/zain-009");
  return responce.json();
};
