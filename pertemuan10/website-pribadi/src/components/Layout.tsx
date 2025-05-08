import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
import {defaultMetadata} from '../utils/metadata';

type LayoutProps = {
  children: React.ReactNode;
}

export default function Layout({children}: any) {
  const metadata = children.props.metadata || defaultMetadata;
  return (
    <>
      <head>
        <link rel='icon' href='/favicon.ico'></link>
        <title>{metadata.title}</title>
        <meta name='description' content={metadata.description}/>

        <meta property='og:title' content={metadata.title}/>
        <meta property='og:description' content={metadata.description}/>
        <meta property='og:image' content={metadata.image}/>
        <meta property='og:url' content={metadata.url}/>
        
      </head>
      <Navbar></Navbar>
      <main>{children}</main>
      <Footer></Footer>
    </>
  );
}