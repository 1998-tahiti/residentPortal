import React from 'react';
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Sort,
  Filter,
  Page,
  Inject,
} from '@syncfusion/ej2-react-grids';

import { packagesData, packagesGrid } from '../data/dummy';
import { Header } from '../components';

const Packages = () => {
  const pageSettings = {
    pageSize: 6,
    pageSizes: true,
  };

  const filterSettings = {
    type: 'Menu',
  };

  return (
    <div className="mx-2 md:mx-6 mt-2 p-4 md:p-6 bg-white rounded-3xl">
      <Header category="Resident Services" title="Packages" />

      <GridComponent
        id="packagesGrid"
        dataSource={packagesData}
        allowPaging={true}
        allowSorting={true}
        allowFiltering={true}
        pageSettings={pageSettings}
        filterSettings={filterSettings}
        width="auto"
      >
        <ColumnsDirective>
          {packagesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>

        <Inject services={[Resize, Sort, Filter, Page]} />
      </GridComponent>
    </div>
  );
};

export default Packages;