import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { type FC, Fragment, useState } from 'react'
import { List, MagnifyingGlass, X, User, ShoppingCart } from '@phosphor-icons/react'
import Image from 'next/image'
import Link from 'next/link'
import { NavigationData, classNames } from '~/utils'
import {useUiStore} from "~/store";

import styled from './header.module.scss'

interface Props {
  isOkPage: boolean
}

export const Header: FC<Props> = ({ isOkPage }) => {


  const setSearchInView = useUiStore((state) => state.search.setInSearch);

  const [open, setOpen] = useState(false)

  return (
    <div className={styled['content-center']}>
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className={styled.dialog} onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className={styled['dialog-overlay']} />
          </Transition.Child>

          <div className={styled['dialog-content']}>
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className={styled['dialog-panel']}>
                <div className={styled['dialog-panel-close']}>
                  <button type="button" onClick={() => setOpen(false)} >
                    <span>Close menu</span>
                    <X aria-hidden="true" />
                  </button>
                  {/* <div className='block'>
                    <ColorPicker />
                  </div> */}
                </div>

                {/* Links */}
                <Tab.Group as="div" className="mt-2">
                  <div className={styled['tab-div']}>
                    <Tab.List className={styled['tab-list']}>
                      {NavigationData.categories.map((category) => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            classNames(
                              selected
                                ? styled['tab-selected-primary']
                                : styled['tab-non-selected'],
                              styled.tab
                            )
                          }
                        >
                          {category.name}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                  <Tab.Panels as={Fragment}>
                    {NavigationData.categories.map((category) => (
                      <Tab.Panel key={category.name} className={styled['tab-panel']}>
                        <div className="space-y-4">
                          {category.featured.map((item, itemIdx) => (
                            <div
                              key={itemIdx}
                              className={classNames(styled['tab-div-category'], 'group')}
                            >
                              <Image
                                src={item.imageSrc}
                                alt={item.imageAlt}
                                layout='fill'
                                className={classNames(styled.image, "group-hover:opacity-75")}
                              />
                              <div className={styled['div-flex']}>
                                <div className={styled['div-overlay']}>
                                  <Link href={item.href}>
                                      <span className="absolute inset-0" aria-hidden="true" />
                                      {item.name}
                                  </Link>
                                  <p aria-hidden="true">
                                    Comprar ahora
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                        {category.sections.map((column, columnIdx) => (
                          <div key={columnIdx} className="space-y-10">
                            {column.map((section) => (
                              <div key={section.name}>
                                <p id={`${category.id}-${section.id}-heading-mobile`} className={styled['category-p']}>
                                  {section.name}
                                </p>
                                <ul
                                  role="list"
                                  aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                                  className={styled['category-ul']}
                                >
                                  {section.items.map((item) => (
                                    <li key={item.name}>
                                      <Link href={item.href}>
                                        {item.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        ))}
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>

                <div className={styled['diolag-navigation']}>
                  {NavigationData.pages.map((page) => (
                    <div key={page.name}>
                      <Link href={page.href}>
                        {page.name}
                      </Link>
                    </div>
                  ))}
                </div>

                {/* <div className="border-t border-gray-200 py-6 px-4">
                  <a href="#" className="-m-2 p-2 flex items-center">
                    <img
                      src="https://tailwindui.com/img/flags/flag-canada.svg"
                      alt=""
                      className="w-5 h-auto block flex-shrink-0"
                    />
                    <span className="ml-3 block text-base font-medium text-gray-900">CAD</span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div> */}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className={styled.header}>
        <nav aria-label="Top" className={styled.nav}>
          <div className={styled['nav-div']}>
            <div className={styled['nav-div-content']}>
              <div className={styled['nav-div-mobile']}>
                <button
                  type="button"
                  onClick={() => setOpen(true)}
                >
                  <span>Open menu</span>
                  <List aria-hidden="true" />
                </button>


                <button onClick={() => setSearchInView(true)}>
                  <span>Search</span>
                  <MagnifyingGlass aria-hidden="true" />
                </button>
              </div>

              {/* Flyout menus */}
              <Popover.Group className={styled['popover-group']}>
                <div >
                  {NavigationData.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      {({ open }) => (
                        <>
                          <div className={styled['popover-div']}>
                            <Popover.Button
                              className={classNames(
                                open
                                  ? styled['popover-button-open-primary']
                                  : styled['popover-button-close'],
                                styled['popover-button']
                              )}
                            >
                              {category.name}
                              <span
                                className={classNames(
                                  open && (styled['popover-button-span-open-primary']),
                                  styled['popover-button-span']
                                )}
                                aria-hidden="true"
                              />
                            </Popover.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Popover.Panel className={styled['popover-panel']}>
                              {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                              <div className={styled['popover-shadow']} aria-hidden="true" />

                              <div className={styled['popover-div']}>
                                <div>
                                  <div>
                                    <div className={styled['div-grid-1']}>
                                      {category.featured.map((item, itemIdx) => (
                                        <div
                                          key={item.name}
                                          className={classNames(
                                            itemIdx === 0 && styled['div-category-0'],
                                            styled['div-category'],
                                            'group'
                                          )}
                                        >
                                          <Image
                                            layout='fill'
                                            src={item.imageSrc}
                                            alt={item.imageAlt}
                                            className={styled.image}
                                          />
                                          <div className={styled['div-flex']}>
                                            <div className={styled['div-overlay']}>
                                              <Link href={item.href}>
                                                  <span aria-hidden="true" />
                                                  {item.name}
                                              </Link>
                                              <p aria-hidden="true" >
                                                Comprar ahora
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                    <div className={styled['div-grid-3']}>
                                      {category.sections.map((column, columnIdx) => (
                                        <div key={columnIdx} className="space-y-10">
                                          {column.map((section) => (
                                            <div key={section.name}>
                                              <p id={`${category.id}-${section.id}-heading`} className={styled['category-p']}>
                                                {section.name}
                                              </p>
                                              <ul role="list" aria-labelledby={`${category.id}-${section.id}-heading`}>
                                                {section.items.map((item) => (
                                                  <li key={item.name} className="flex">
                                                    <Link href={item.href}>
                                                      {item.name}
                                                    </Link>
                                                  </li>
                                                ))}
                                              </ul>
                                            </div>
                                          ))}
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  ))}

                  {NavigationData.pages.map((page) => (
                    <Link
                      key={page.name}
                      href={page.href}
                        className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                      >
                        {page.name}
                    </Link>
                  ))}
                </div>
              </Popover.Group>

              {/* Logo */}
              <Link href={'/'} className={'flex'}>
                  <span className="sr-only">Prodimar</span>
                  <Image
                    className="h-8   w-auto"
                    src="/images/image.webp"
                    width={32}
                    height={32}
                    alt=""
                  />
              </Link>


              <div className="flex-1 flex items-center justify-end">
                <div className='hidden lg:block'>
                  {/* <ColorPicker /> */}
                </div>
                {/* Search */}
                <button onClick={() => setSearchInView(true)} className="hidden ml-6 p-2 text-gray-400 hover:text-gray-500 lg:block">
                  <span className="sr-only">Search</span>
                  <MagnifyingGlass className="w-6 h-6" aria-hidden="true" />
                </button>

                {/* Account */}
                <a href="#" className="p-2 text-gray-400 hover:text-gray-500 lg:ml-4">
                  <span className="sr-only">Account</span>
                  <User className="w-6 h-6" aria-hidden="true" />
                </a>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <Link href='/client/cart' className='group -m-2 p-2 flex items-center'>
                      <ShoppingCart
                        className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                      />
                      <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                      <span className="sr-only">items in cart, view bag</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}

