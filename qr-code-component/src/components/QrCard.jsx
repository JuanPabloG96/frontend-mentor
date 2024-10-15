export function QrCard () {
  return (
    <article className='bg-white flex flex-col gap-8 rounded-[20px] p-4 w-[90%] max-w-80'>
      <img src='images/image-qr-code.png' alt='QR image' width='250' className='w-full rounded-xl' />
      <div className='flex flex-col gap-4 text-center mb-2'>
        <h3 className='font-bold text-dark-blue text-2xl'>Improve your front-end skills by building projects</h3>
        <p className='font-normal text-[16px] text-grayish-blue'>
          Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
        </p>
      </div>
    </article>
  )
}
