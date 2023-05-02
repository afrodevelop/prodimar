import { Dialog, Disclosure, Transition } from '@headlessui/react'

import { X, Minus, Plus } from '@phosphor-icons/react'
import React, { type Dispatch, type FC, Fragment, type SetStateAction } from 'react'
import { subCategories, filters } from '~/utils'
import styled from './categoryMobile.module.scss'

interface Props {
  mobileFiltersOpen: boolean;
  setMobileFiltersOpen: Dispatch<SetStateAction<boolean>>
}

export const CategoryMobile:FC<Props> = ({  mobileFiltersOpen, setMobileFiltersOpen }) => {


  const theme = 'primary'


  return (
    <Transition.Root show={mobileFiltersOpen} as={Fragment}>
      <Dialog as="div" className={styled.dialog} onClose={setMobileFiltersOpen}>
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className={ styled['transition-div'] } />
        </Transition.Child>

        <div className={ styled['div-content'] }>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <Dialog.Panel className={styled['dialog-panel']}>
              <div className={styled['dialog-panel-div']}>
                <h2>Categorias</h2>
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(false)}
                >
                  <span >Close menu</span>
                  <X aria-hidden="true" />
                </button>
              </div>

              {/* Filters */}
              <form className={ styled['form-filter'] }>
                <h3 className={ styled['heading-3'] }>Categories</h3>
                <ul role="list" className={styled['u-list']}>
                  {subCategories.map((category) => (
                    <li key={category.name}>
                      <a href={category.href}>
                        {category.name}
                      </a>
                    </li>
                  ))}
                </ul>

                {filters.map((section) => (
                  <Disclosure as="div" key={section.id} className={ styled.disclosure }>
                    {({ open }) => (
                      <>
                        <h3 className={ styled['heading-3-disclosure'] }>
                          <Disclosure.Button className={ styled['disclosure-button'] }>
                            <span>{section.name}</span>
                            <span>
                                  {open ? (
                                    <Minus aria-hidden="true" />
                                  ) : (
                                    <Plus aria-hidden="true" />
                                  )}
                                </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className={ styled['disclosure-panel'] }>
                          <div>
                            {section.options.map((option, optionIdx) => (
                              <div key={option.value} className={ styled.option }>
                                <input
                                  id={`filter-mobile-${section.id}-${ optionIdx }`}
                                  name={`${section.id}[]`}
                                  defaultValue={option.value}
                                  type="checkbox"
                                  defaultChecked={option.checked}
                                  className={styled[theme]}
                                />
                                <label
                                  htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </form>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
