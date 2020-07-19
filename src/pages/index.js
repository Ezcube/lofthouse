import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  const { title, lang, description } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'Вся правда о Loft House'}</title>
        <html lang={lang || 'ru'} />
        <meta name="description" content={description || 'лофт хаус набережные челны отзывы'} />
      </Helmet>
      <App />
    </>
  );
};
