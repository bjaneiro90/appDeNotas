export function Button ({children, onClick, style, type}) {
    return (
        <button
        onClick={onClick}
        type = {type || "button"}
        className="like-comment-button"
        style= {{...style}}>
            {children}
        </button>
    )
}

export function PrimaryButton ({ children, onClick, type}) {
    return (
        <Button
        onClick={onClick}
        type= {type}
        style={{
            backgroundColor: "blue",
            border: "1px solid black",
            borderRadius: "8px"
        }}
        >
            {children}
        </Button>
    )
}