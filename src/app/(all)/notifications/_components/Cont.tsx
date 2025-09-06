"use client";
import React, { useState } from "react";
import Filter from "./Filter";
import Searching from "./Searching";
import Table from "./Table";
interface Item {
  num: string;
  key: string;
}

const Cont = () => {
  const [filter, setFilter] = useState<Item>({ num: "80", key: "all" });
  return (
    <>
      <Filter state={filter} setState={setFilter} />
      <Searching />
      <Table />
    </>
  );
};

export default Cont;
