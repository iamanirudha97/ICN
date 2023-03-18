const filterlist = ['My listing', 'See your competition']


export default function ProductFilter({currentFilter, changeFilter}) {

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
