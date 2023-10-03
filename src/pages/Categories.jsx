import useNotes from "../hooks/useNotes";

export const Categories = () => {
   
    const {notes, loading, error} = useNotes();

    if(loading) return <p>carregando categorias</p>
    if(error) return <p>{error}</p>

    console.log(notes)
   
    return (

        <section>
            <h1>Categorias</h1>
            <p>Aqui vai a página Categorias</p>
        </section>
    )
} 