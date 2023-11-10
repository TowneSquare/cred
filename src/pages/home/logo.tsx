const Logo = () => {
  return (
    <div className="flex flex-col items-center">
      <img src="/home/cred.svg" alt="cred" />
      <div className="flex gap-1">
        <p className="font-semibold">by</p>
        <img src="/home/t.png" alt="townesquare" />
        <p className="font-semibold">townesquare</p>
      </div>
    </div>
  )
}

export default Logo;