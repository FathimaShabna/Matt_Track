"use client";
import React, { useEffect } from "react";
import Header from "./Header";
import Content from "./Content";
import { useRouter } from "next/navigation";

const Landing = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/signin");
  }, []);

  return null;
  // return (
  //   <div style={{ backgroundColor: '#fff' }}>
  //     {/*<Link rel='stylesheet' href='/signin'>*/}
  //     {/*  Sign In*/}
  //     {/*</Link>*/}
  //     <Header />
  //     <Content />
  //   </div>
  // );
};

export default Landing;
