

export const NewsLetterBox = () => {
    const onSubmitHandler=(event)=>{
        event.preventDefault();
    }
  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
        <p className="text-gray-400 mt-3">lorem ipsum is simply dummy text of printing and type setting
        industry.Lorem ipsum has been.</p>
        <form className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3">
            <input className="w-full sm:flex-1 outline-none" type="text" name="" id="" placeholder="Enter your email" required/>
            <button onClick={onSubmitHandler} type="submit" className="bg-black text-white text-xs px-6 sm:px-10 py-4">SUBSCRIBE</button>
        </form> 
    </div>
  )
}
