interface XLinkProps {
  children: any;
}
const XLink: React.FC<XLinkProps> = ({children}) =>
{
  return (
    <a href="https://twitter.com/0xcred" target="_blank" className="text-third-default hover:underline">
      {children}
    </a>
  )
} 

export default XLink;