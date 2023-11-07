const PointLogo = () => {
  const trading="750"

  return (
    <div
    className="mt-4 px-8 flex gap-2 justify-center items-center border-4 border-primary-default rounded-full "
    style={{
      background:
        "linear-gradient(94.74deg, rgba(255, 255, 255, 0.14) 16.43%, rgba(255, 255, 255, 0) 108.74%)",
    }}
  >
    <p className="text-[48px] font-semibold">{trading}</p>
    <img src="/credpoints/cred.svg" alt="cred" className="w-7 h-7" />
  </div>
  )
}

export default PointLogo;