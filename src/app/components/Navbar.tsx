'use client'

import React from 'react';
import { Button, Layout, Menu, Typography, Input } from 'antd';
import type { SearchProps } from 'antd/es/input/Search';

const { Search } = Input;
const { Title } = Typography;

const { Header } = Layout;

const Navbar: React.FC = () => {
    
    const onSearch: SearchProps['onSearch'] = (value, _e, info) => {
        console.log(info?.source, value)
    };

  return (
    <Layout>
          <Header className="flex items-center" style={{
            maxHeight: "100%",
            height: "40vh"
      }}>
        <Menu
            className="flex-col min-w-0 flex-1 max-h-screen justify-center"
            theme="dark"
            mode="horizontal"
              > 
                  <Title
                      level={2}
                      style={{
                          color: "white",
                          textAlign: "center",
                          marginBottom: "0"
                      }}>
                      FazWaz Developer Testing
                  </Title>
                  <Title
                      level={4}
                      style={{
                          color: "white",
                          textAlign: "center",
                          marginTop: "0",
                          marginBottom: "35px"
                      }}>
                      Testing project with NextJs, Mysql and GraphQL
                  </Title>
            <div className="w-full inline-flex mt-0 mb-3 my-auto flex-nowrap justify-center overflow-hidden rounded-lg">
                <Button className="px-2 py-6">Buy</Button>
                <Button className="px-2 py-6">Rent</Button>
                <Button className="px-2 py-6">Sale</Button>
            </div>
            <div className="w-full inline-flex mt-0 mb-3 my-auto flex-nowrap justify-center overflow-hidden rounded-lg">
                <Button className="px-2 py-6">10,000</Button>
                <Button className="px-2 py-6">100,000</Button>
                <Button className="px-2 py-6">1,000,000</Button>
            </div>
            <Search
                className="max-w-lg m-auto"
                placeholder="input search text"
                allowClear
                enterButton="Search"
                size="large"
                onSearch={onSearch}
                />
        </Menu>
      </Header>
    </Layout>
  );
};

export default Navbar