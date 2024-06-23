import React from "react";
import { UserButton } from "@clerk/nextjs";

const Home = () => {
  return (
    <div>
      <UserButton afterSignOutUrl="/ask-question"></UserButton>
    </div>
  );
};

export default Home;
