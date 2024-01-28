interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}
export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div  className={`container mx-auto ${className}`}>
      { children }
    </div>
  )
}