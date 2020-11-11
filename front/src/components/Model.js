

const Model = ({children, isModalOpen}) => {
    
    if (!isModalOpen) {
        return null
    }

    return (
        <div  className="model">
            {children}
        </div>
    )
}

export default Model;