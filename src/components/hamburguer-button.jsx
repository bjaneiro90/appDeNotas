export function HamburguerButton ({onClick}) {

    return <button onClick={onClick} className="hamburguesa-button">
        <span className="material-symbols-outlined"
              style= {{
                fontSize: "30px"
              }}>
            menu
        </span>
    </button>
}