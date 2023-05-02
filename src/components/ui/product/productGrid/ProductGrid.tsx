import { Check, HeartStraight, X, Plus, Minus } from '@phosphor-icons/react';
import { type FC } from 'react';
import {api, classNames} from '~/utils';
import styled from './productGrid.module.scss'
import Image from 'next/image';


export const ProductGrid:FC = () => {

  const theme = 'primary'

  const { data } = api.products.getAll.useQuery();

  return (
    <div className={styled['grid-products']}>
      {data?.productos.map((product) => (
        <a key={ product.id }
           href={'#'}
           className={classNames(styled.link, 'group')}>

          <div className={styled['div-image']}>
            {/*<Image*/}
            {/*  src={''}*/}
            {/*  alt={product.precio1}*/}
            {/*  className={ styled.image }*/}
            {/*  layout='fill'*/}
            {/*/>*/}
          </div>
          <div className={classNames(styled.heart, styled[theme])}>
            {product.inWishList
              ? <HeartStraight  weight='fill'/>
              : <HeartStraight  weight='bold'/>
            }
          </div>
          <div className={ styled.content }>
            <div className={ styled['content-div'] }>
              <h3 className={classNames(styled['product-name'], 'first-letter:uppercase hyphens-auto overflow-hidden w-64 break-words')}>{product.nombre}</h3>
              <p className={styled['p-avalaible']}>
                { product.existencia
                  ? <><Check className={styled.check} aria-hidden="true" /><span> Disponible </span></>
                  : <><X className={ styled.x} aria-hidden="true" /><span> Agotado </span></>
                }
              </p>
              <p>{ product.precio1 }</p>
            </div>
            { !product.inCart
              ?
              <div className={classNames(styled.cart, styled[theme] )}>
                Agregar al carrito
              </div>
              : <div className={styled['cart-open']}>
                <div className={ classNames(styled.minus, styled[theme]) }>
                  <Minus className='w-6 h-6'/>
                </div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value='2'
                  onChange={() => { console.log('on Change no implemented')}}
                  className={ classNames(styled.input, styled[theme]) }

                />
                <div className={ classNames(styled.plus, styled[theme]) }>
                  <Plus className='w-6 h-6'/>
                </div>


              </div>

            }

          </div>
        </a>
      ))}
    </div>

  );
};
