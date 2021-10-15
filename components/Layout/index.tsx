import React from 'react';
import { Data } from '../../lib/constants';
import Header from '../Header';
import Footer from '../Footer';

const Layout = ({ children }) => {
  const header = Data.header;
  return (
    <div>
      <Header
        icon={header.icon}
        link_solutions={header.link_solutions}
        link_about={header.link_about}
        link_resource={header.link_resource}
        link_job={header.link_job}
        link_signin={header.link_signin}
        link_register={header.link_register}
      />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
