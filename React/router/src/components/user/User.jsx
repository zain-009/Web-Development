import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();

  return (
    <div className="flex justify-center bg-slate-600 mx-48 my-4 py-5 text-white font-bold text-3xl">
      User: {userid}
    </div>
  );
}

export default User;
