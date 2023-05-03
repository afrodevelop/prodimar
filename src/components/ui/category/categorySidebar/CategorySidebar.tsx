import {Disclosure} from '@headlessui/react'
import {api, classNames, subCategories} from '~/utils'
import {Minus, Plus} from '@phosphor-icons/react';
import styled from './categorySidebar.module.scss'
import {type ChangeEvent} from "react";
import {shallow} from "zustand/shallow";
import {useCategoriesStore} from "~/store";

export const CategorySidebar = () => {

  const {data, isLoading} = api.group.getAll.useQuery();

  const {data: subGroup, isLoading: isLoadingSubGroup} = api.subGroup.getAll.useQuery();

  const theme = 'primary'

  const categories = useCategoriesStore(state => state.categories, shallow)

  const addCategory = useCategoriesStore(state => state.addCategories)

  const removeCategory = useCategoriesStore(state => state.removeCategories)


  const handleOptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTimeout(() => {

      const optionId = e.target.id;
      if (e.target.checked) {
        addCategory(optionId)
      } else {
        removeCategory(optionId)
      }
    }, 0)
  }

  return (
    <form className={styled['form-filters-desktop']}>
      {/* Filters */}
      <h3>Categories</h3>
      <ul role="list" className={classNames(styled['ul-list'], styled[theme])}>
        {subCategories.map((category) => (
          <li key={category.name}>
            <a href={category.href}>{category.name}</a>
          </li>
        ))}
      </ul>

      {data?.grupos.map((section) => (
        <Disclosure as="div" key={section.id} className={styled['disclosure-filter']}>
          {({open}) => (
            <>
              <h3 className={styled['h3-flow']}>
                <Disclosure.Button className={classNames(styled['disclosure-button'])}>
                  <p
                    className={classNames(styled[theme], 'max-w-4 w-60 text-gray-600 overflow-hidden hyphens-auto first-letter:uppercase break-words')}
                    lang={'es'}>{section.nombre}</p>
                  <span>
                        {open ? (
                          <Minus aria-hidden="true"/>
                        ) : (
                          <Plus aria-hidden="true"/>
                        )}
                      </span>
                </Disclosure.Button>
              </h3>
              <Disclosure.Panel className={styled['disclosure-panel-filters']}>
                <div className='overflow-hidden'>
                  {subGroup?.subgrupos.filter(sg => sg.grupo_id === section.id).map((option, optionIdx) => (
                    <div key={option.nombre} className={styled['option-filter']}>
                      <input
                        id={option.id}
                        value={option.id}
                        aria-describedby="certifications-description"
                        name="certifications"
                        type="checkbox"
                        onChange={handleOptionChange}
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      {/*<input id={option.id} name={`${option.id}`}*/}
                      {/*       type="checkbox"*/}
                      {/*       defaultChecked={false}*/}
                      {/*       onChange={handleOptionChange}*/}
                      {/*       className="h-4 w-4 rounded border-gray-300 text-yellow-600 focus:ring-indigo-600"/>*/}
                      <label htmlFor={`filter-${section.id}-${optionIdx}`}
                             className=' hyphens-auto w-60'>{option.nombre} </label>
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
