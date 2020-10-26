import React from 'react'
import PartsList from './PartsList'
import PartsListFilters from './PatsListFilters'
import PartsSummary from './PartsSummary'
const DashboardPage = () => (
    <div>
        <PartsSummary />
        <PartsListFilters />
        <PartsList />
    </div>
)

export default DashboardPage