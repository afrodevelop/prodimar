import Head from "next/head";
import {type FC, type ReactNode} from "react";
import { motion } from "framer-motion";
import { classNames } from "~/utils";
import {Header} from "./Header";
import { Footer} from "./Footer";

import styled from './layout.module.scss';

interface Props {
  children: ReactNode | ReactNode[],
  title?: string;
  isOkPage?: boolean
}


export const Layout:FC<Props> = ({children, title = 'PRODIMAR', isOkPage= false}) => {
  return (
    <>
    <Head>
      <title>{title}</title>
      <meta name="og:title" content={title} />
      <meta name="theme-color" content={'#120763'} />
      <link rel="icon" href="/favicon.ico" />


    </Head>
  <motion.div
    animate={{
      ...(isOkPage && ({translateY:[-100, 0]}))
    }}
    transition={{
      ...(isOkPage && ({delay: 6}))
    }}
    className={
      classNames(
        isOkPage
          ? 'absolute top-0 inset-x-0 z-50'
          : 'relative')}>

    <Header isOkPage={ isOkPage } />
  </motion.div>
  <main className={styled.main}>
    { children }
  </main>
  <Footer />
    </>
  );
};