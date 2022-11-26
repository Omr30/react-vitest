
type AccordionProps = {
    title: string,
    children: React.ReactNode
}

const Accordion = ({title, children}: AccordionProps) => {
  return (
    <div>
        <h3>{title}</h3>
        <div>
            {children}
        </div>
    </div>
  )
}

export default Accordion