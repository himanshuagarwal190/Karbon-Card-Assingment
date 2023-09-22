let isScroll = true

export default function Modal({ children, showModal} : { children: React.ReactNode, showModal: Boolean }){
    if(showModal){
        disableScroll()
        return (
            <div className="modal">
                <div className="modalMain">
                    {children}
                </div>
                
            </div> 
        )
    } else {
        enableScroll()
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

function enableScroll(){
    if(isScroll)
        document.body.style.overflow = "scroll"
}

 function disableScroll(){
    window.scrollTo(0,0);
    document.body.style.overflow = "hidden";
    isScroll = false
    setTimeout(() =>{
        isScroll = true
    }, 0)
 }