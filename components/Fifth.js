function Fifth(){
    return(
        <>
            <section>
      <div className="container mx-auto mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <div className="flex justify-center text-6xl bg-gray-100">
            <img src="../hero2.jpg" className="object-cover w-full h-full w-320 md:w-768 lg:w-1440" alt="Image alt text" />
          </div>
        <div>
        <div className="flex justify-left navlogo text-4xl md:text-5xl lg:text-6xl 2lg:text-6xl p-6 bg-gray-100">
          <h1>CONTACT US</h1>
        </div>
        <div className="flex flex-col gap-y-2 ml-7">
          <label htmlFor="name" className='navlogo'>Name</label>
          <input
            type="text"
            name="name"
            className="w-2/3 px-4 py-2 border border-gray-300 outline-none focus:border-gray-400"
          />
        </div>
<div className="flex flex-col gap-y-2 ml-7">
  <label htmlFor="name" className='navlogo'>Mobile</label>
  <input
    type="text"
    name="name"
    className="w-2/3 px-4 py-2 border border-gray-300 outline-none focus:border-gray-400"
  />
</div>
<div className="flex flex-col gap-y-2 ml-7 mb-4">
  <label htmlFor="name" className='navlogo'>Email</label>
  <input
    type="text"
    name="name"
    className="w-2/3 px-4 py-2 border border-gray-300 outline-none focus:border-gray-400"
  />
</div>
<div className="flex flex-col gap-y-2 ml-7">
<a
                                    href=""
                                    className="py-2 px-4 text-center text-black w-2/3 rounded-full bg-lightblue border-1 borderlightblue text-xl navlogo"
                                    >SUBMIT</a
                                >
</div>
    </div>
  </div>
</div>
      </section>
        </>
    )
}

export default Fifth