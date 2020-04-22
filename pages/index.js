import Head from 'next/head'
import 'antd/dist/antd.css';

import Search from '../components/search/search';
import Create from '../components/create/create';
import Task from '../components/task/task';

import { useState } from 'react';

export default function Home( {data} ) {
  const [ searchParams, setSearchParams ] = useState(" ");

  const handleChange = (e) => {
      setSearchParams(e.target.value);
      console.log(data);
  } 

  return (
    <div className="container">
        <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
      </Head>
        <main>
            <Search handleChange={handleChange}/>
            
            <Create/>

            <Task/>
        </main>

        <style jsx>{`
          .container{
                width: 40%;
                height: 100%;
                margin: 5vh auto;
          }
        `}</style>

    </div>

  )
}

Home.getInitialProps = () => {
    const data = localStorage.getItem('tasklist');

    return data;
}
