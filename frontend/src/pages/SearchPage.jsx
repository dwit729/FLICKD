import React from "react";
import { useState } from "react";
import {Input} from 'antd';
const {Search} = Input

const SearchPage = () => {


  const [isLoading, setisLoading] = useState(true);

  return (
    <div className=" flex flex-col items-center pt-10">

      <h1 className="title text-xl sm:text-3xl">Find anything you want!</h1>
      <Search className="w-11/12" placeholder="input search text" type="text" enterButton="Search" size="large" loading="true" />
    </div>
  );
};

export default SearchPage;
