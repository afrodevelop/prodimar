import { Menu, Transition } from "@headlessui/react"
import { CaretDown, SquaresFour, Rows, Funnel } from "@phosphor-icons/react"
import { type Dispatch, type FC, Fragment, type SetStateAction } from "react"
import { classNames, sortOptions } from "~/utils"
import styled from './categoryNavbar.module.scss'

interface Props {
  isGridView: boolean;
  setIsGridView: Dispatch<SetStateAction<boolean>>,
  setMobileFiltersOpen: Dispatch<SetStateAction<boolean>>
}

export const CategoryNavbar:FC<Props> = ({ isGridView, setIsGridView, setMobileFiltersOpen  }) => {

  const theme = 'primary'

  return (
    <div className={ styled['section-div'] }>
      <h1 className={ classNames( styled['heading-1'], styled[theme]) }>Papeleria</h1>

      <div className={ styled['section-div-div'] }>
        <Menu as="div" className={ styled.menu }>
          <div>
            <Menu.Button className={ classNames(styled['menu-button'], 'group')}>
              Ordenar
              <CaretDown aria-hidden="true" className='group-hover:text-gray-500'/>
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className={ styled['menu-items']}>
              <div>
                {sortOptions.map((option) => (
                  <Menu.Item key={option.name}>
                    {({ active }) => (
                      <a
                        href={option.href}
                        className={classNames(
                          option.current ?  styled[`arcontac-current-${ theme }`] :  styled['arcontac-no-current'],
                          active && styled['arcontac-active'],
                          styled.arcontac
                        )}
                      >
                        {option.name}
                      </a>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>

        <button type="button" className={ styled['button-grid-list'] } onClick={() => setIsGridView(!isGridView) }>
          { isGridView
            ? <>
              <span className="sr-only">View grid</span>
              <SquaresFour weight='fill' className="w-5 h-5" aria-hidden="true" />
            </>
            : <>
              <span className="sr-only">View grid</span>
              <Rows weight='fill' className="w-5 h-5" aria-hidden="true" />
            </>
          }
        </button>
        <button
          type="button"
          className={ styled['button-funnel'] }
          onClick={() => setMobileFiltersOpen(true)}>
          <span>Filtros</span>
          <Funnel aria-hidden="true" weight='fill'/>
        </button>
      </div>
    </div>
  )
}
