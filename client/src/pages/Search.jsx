import React from 'react'

const Search = () => {
  return (
    <div className='flex flex-col md:flex-row'>
        <div className='p-7 border-b-2 md:border-r-2 md:min-h-screen'>
            <form>
                <div className='flex items-center gap-2'>
                    <label className='whitespace-nowrap'>Search Term:</label>
                    <input type="text" placeholder='Search...' id='searchTerm' className='border rounded-lg p-3 w-full' />
                </div>
            </form>
        </div>
        <div>
            <h1 className='text-3xl font-semibold mt-5 border-b'>Search Results:</h1>
        </div>
    </div>
  )
}

export default Search