import FilterChains from "../filterComponents/filterChains";
import FilterCollection from "../filterComponents/filterCollection";
import FilterPrise from "../filterComponents/filterPrise";
import FilterSale from "../filterComponents/filterSale";
import FilterStatus from "../filterComponents/filterStatus";

export const FilterData = [
    {
        id: '1',
        title: 'Status',
        content: <FilterStatus />
    },
    {
        id: '2',
        title: 'Prise',
        content: <FilterPrise />
    },
    {
        id: '1',
        title: 'Collection',
        content: <FilterCollection />
    },
    {
        id: '4',
        title: 'Chains',
        content: <FilterChains />
    },
    {
        id: '5',
        title: 'On Sale In',
        content: <FilterSale />
    },
    
]