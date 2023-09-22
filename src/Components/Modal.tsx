export default function Modal({ children, showModal} : { children: React.ReactNode, showModal: Boolean }){
    if(showModal){
        window.scrollTo(0,0);
        document.body.style.overflow = "hidden";
        return (
            <div className="modal">
                <div className="modalMain">
                    {children}
                </div>
                
            </div> 
        )
    } else {
        document.body.style.overflow = "scroll"
        return <></>
    }
}

export function ModalHead({ children }: {children: React.ReactNode}){
    return (
        <div className="modalHead">
            { children }
        </div>
    )
}

export function ModalBody({ children }: {children: React.ReactNode}){
    return (
        <div className="modalBody">
            { children }
        </div>
    )
}