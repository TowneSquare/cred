const Logo = () => {
  return (
    <div className="flex flex-col items-center">
      <img src="/home/cred.svg" alt="cred" className="w-[158px] md:w-[200px]"/>
      <div className="flex gap-1">
        <p className="text-sm md:text-base font-semibold">by</p>
        <img src="/home/t.png" alt="townesquare" />
        <p className="text-sm md:text-base font-semibold">townesquare</p>
      </div>
    </div>
  )
}

export default Logo;