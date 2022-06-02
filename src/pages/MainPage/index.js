import React from 'react';

import { Book, Footer, Header, SearchBox, SideBar } from '../../components';
import { BookDetail } from '../../components/BookDetail/index';
import { BorrowReturn } from '../../components/BorrowReturn';
import { GenreArray } from '../../constants/GenreArray';

export const MainPage = () => {
  return (
    <>
      <Header />
      <SideBar genreArray={GenreArray} />
      <SearchBox />
      <Book
        title='책'
        author='s'
        publisher='d'
        pubDate={new Date()}
        bookCover='s'
        desc='d'
      />
      <BorrowReturn />
      <BookDetail />
      <Footer />
    </>
  );
};
