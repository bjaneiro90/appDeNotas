export const getAllNotesService = async () => {
    const response = await fetch(`${import.meta.env.VITE_APP_BACKEND}`)

    const json = await response.json()

    if(!response.ok) {
        throw new Error(json.message)
    }

    return json.data;
}