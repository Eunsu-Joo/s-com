const Spinner = () => {
  return (
    <div className='flex h-40 items-center justify-center'>
      <div
        className='text-surface inline-block h-6 w-6 animate-spin rounded-full border-2 border-solid border-current border-e-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]'
        role='status'
      />
    </div>
  )
}
export default Spinner
