const filterlist = ['All', 'Basic Necessities', 'Households', 'Rentals', 'Construction Personnel', 'Building Material Supplier', 'Medic and Miscellaneous' ]


export default function HomeProductFilter({currentFilter, changeFilter}) {

    const handleClick = (newFilter) => {
        changeFilter(newFilter)
    }

  return (
    <div className='product-filter'>
        <nav>
            {filterlist.map((f) => (
                <button key={f}
                onClick={() => {handleClick(f)}}
                className={currentFilter === f ? 'active' : ''}
                > {f} </button>
            ))}
        </nav>
    </div>
  )
}
