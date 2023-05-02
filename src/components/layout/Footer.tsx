import React from 'react';
import styled from './footer.module.scss';
import Link from 'next/link';
import {classNames, FooterNavigation} from "~/utils";

export const Footer = () => {

  const theme = 'primary'


  return (
    <footer aria-labelledby="footer-heading" className={classNames(styled.footer, styled[theme])}>
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div>
        <div className={styled.content}>
          <div className={styled['grids-sections']}>
            <div>
              <div>
                <h3 className={classNames(styled.title, styled[theme])}>Tienda</h3>
                <ul role="list" className={styled.list}>
                  {FooterNavigation.shop.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className={styled[theme]}>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className={classNames(styled.title, styled[theme])}>Campañía</h3>
                <ul role="list" className={styled.list}>
                  {FooterNavigation.company.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className={styled[theme]}> {item.name} </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={styled['space-section']}>
              <div>
                <h3 className={classNames(styled.title, styled[theme])}>Tu Cuenta</h3>
                <ul role="list" className={styled.list}>
                  {FooterNavigation.account.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className={styled[theme]}> {item.name} </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className={classNames(styled.title, styled[theme])}>Conectar</h3>
                <ul role="list" className={styled.list}>
                  {FooterNavigation.connect.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className={styled[theme]}>{item.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className={styled.subscribe}>
            <h3 className={classNames(styled.title, styled[theme])}>Registrate para conocer nuestras noticias</h3>
            <p className={styled[theme]}>Las últimas ofertas y ahorros, enviados a su bandeja de entrada semanalmente.</p>
            <form className="mt-2 flex sm:max-w-md">
              <label htmlFor="email-address" >
                Email address
              </label>
              <input
                id="email-address"
                type="text"
                autoComplete="email"
                required
                className={styled[theme]}
              />
              <div className={styled['div-button']}>
                <button type="submit" className={styled[theme]}>Registrarme</button>
              </div>
            </form>
          </div>
        </div>

        <div className={classNames(styled.copyrigth, styled[theme])}>
          <p>Copyright &copy; 2022 Proveeduria de Dibujo, Manualidades y Artes, C.A. - J-30972402-9</p>
        </div>
      </div>
    </footer>
  );
};
