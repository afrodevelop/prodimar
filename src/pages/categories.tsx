import {type NextPageWithLayout} from "~/pages/_app";
import {Layout} from "~/components";
import {api} from "~/utils";
import styled from './categories.module.scss';
import {CategoryMobile, CategoryNavbar, ProductGrid} from "~/components/ui";
import {useState} from "react";
import {CategorySidebar} from "~/components/ui/category/categorySidebar/CategorySidebar";


const CategoriesPage: NextPageWithLayout = () => {

  const {data, isLoading} = api.group.getAll.useQuery();

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const [isGridView, setIsGridViem] = useState(true)


  return (
    <>
      <div className={styled['category-filter']}>
        <div>
          {/* Mobile filter dialog */}
          <CategoryMobile
            mobileFiltersOpen={mobileFiltersOpen}
            setMobileFiltersOpen={setMobileFiltersOpen}/>
          <section className={styled['section-main']}>
            {/* Category navbar */}
            <CategoryNavbar isGridView={isGridView} setIsGridView={setIsGridViem}
                            setMobileFiltersOpen={setMobileFiltersOpen}/>
            <section aria-labelledby="products-heading" className={styled['product-heading']}>
              <h2 id="products-heading">Products</h2>
              <div >
                {/* Category Sidebar */}
                <CategorySidebar/>
                <div className='w-full col-span-3'>

                  {/*{ isGridView*/}
                  <ProductGrid/>
                  {/*  : <ProductTable />*/}
                  {/*}*/}
                </div>
                {/*<CategoryPagination />*/}
              </div>
            </section>
          </section>
        </div>
      </div>
    </>
  );
};

CategoriesPage.getLayout = page => <Layout>{page}</Layout>;

export default CategoriesPage;