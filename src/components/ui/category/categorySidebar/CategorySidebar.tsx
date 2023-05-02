import { Disclosure } from '@headlessui/react'
import {subCategories, filters, classNames, api} from '~/utils'
import { Minus, Plus } from '@phosphor-icons/react';
import styled from './categorySidebar.module.scss'

export const CategorySidebar = () => {

  const { data, isLoading } = api.group.getAll.useQuery();

  const { data: subGroup, isLoading: isLoadingSubGroup } = api.subGroup.getAll.useQuery();

  const theme = 'primary'

  return (
    <form className={styled['form-filters-desktop']}>
      {/* Filters */}
      <h3>Categories</h3>
      <ul role="list" className={ classNames(styled['ul-list'], styled[theme]) }>
        {subCategories.map((category) => (
          <li key={category.name}>
            <a href={category.href}>{category.name}</a>
          </li>
        ))}
      </ul>

      {data?.grupos.map((section) => (
        <Disclosure as="div" key={section.id} className={ styled['disclosure-filter'] }>
          {({ open }) => (
            <>
              <h3 className={ styled['h3-flow'] }>
                <Disclosure.Button className={classNames(styled['disclosure-button']) }>
                  <p className={classNames(styled[theme], 'max-w-4 w-60 text-gray-600 overflow-hidden hyphens-auto first-letter:uppercase break-words') } lang={'es'}>{section.nombre}</p>
                  <span>
                        {open ? (
                          <Minus aria-hidden="true" />
                        ) : (
                          <Plus aria-hidden="true" />
                        )}
                      </span>
                </Disclosure.Button>
              </h3>
              <Disclosure.Panel className={styled['disclosure-panel-filters']}>
                <div>
                  {subGroup?.subgrupos.filter(sg => sg.grupo_id === section.id).map((option, optionIdx) => (
                    <div key={option.nombre} className={styled['option-filter']}>
                      <input
                        id={`filter-${section.id}-${optionIdx}`}
                        name={`${section.id}[]`}
                        defaultValue={option.nombre}
                        type="checkbox"
                        defaultChecked={false}
                        className={styled[theme]}
                      />
                      <label
                        htmlFor={`filter-${section.id}-${optionIdx}`}
                      >
                        {option.nombre}
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
  )
}
