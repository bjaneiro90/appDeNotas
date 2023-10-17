//const token = localStorage.getItem("token")

export const getAllNotesService = async (contextToken) => {

    console.log('servicio carga notas, token:', contextToken);
    const response = await fetch(`${import.meta.env.VITE_APP_BACKEND}/notes` , {
        method: "GET",
        headers: {
            Authorization: contextToken
        },
    })


    const json = await response.json()

    if(!response.ok) {
        throw new Error(json.message)
    }
    return json.data;
}



export const getSingleNoteService = async (id, token) => {
    const response = await fetch(`${import.meta.env.VITE_APP_BACKEND}/notes/${id}`, {
        method: "GET",
        headers: {
            Authorization: token,
        },
    });
    
    const json = await response.json();
    
    

    if(!response.ok) {
        throw new Error(json.message);

    }

    return json.data
}



export const registerUserService = async ({email, password,name,surname}) => {
    const response = await fetch(`${import.meta.env.VITE_APP_BACKEND}/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email,password,name,surname})
    });

    const json = await response.json();

    if (!response.ok) {
        throw new Error(json.message)
    }
    
}


export const loginUserService = async ({email, password}) => {
    const response = await fetch(`${import.meta.env.VITE_APP_BACKEND}/users/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password}) 
    });

    const json = await response.json();

    if(!response.ok) {
        throw new Error(json.message)
    }

    return json.data
}



export const getMyDataService = async ({token}) => {
    const response = await fetch(`${import.meta.env.VITE_APP_BACKEND}/users/user`, {
        headers: {
            Authorization: token
        }
    });

    const json = await response.json();

    if(!response.ok) {
        throw new Error(json.message)
    }

    return json.data
}


export const sendNoteService = async (data, token) => {
    const response = await fetch(`${import.meta.env.VITE_APP_BACKEND}/notes`, {
        method: 'POST',
        headers: {
            Authorization: token,
        },
        body: data
    })

    const json = await response.json();

    if(!response.ok) {
        throw new Error(json.message)
    }

    return json.data
}


export const deleteNoteService = async ({id, token}) => {
    const response = await fetch(`${import.meta.env.VITE_APP_BACKEND}/notes/${id}`, {
        method: "DELETE",
        headers: {
            Authorization: token
        }
    });

    const json = await response.json();

    if(!response.ok) {
        throw new Error(json.message)
    }
}


export const updateNoteService = async ({id}, data) => {
    const response = await fetch(`${import.meta.env.VITE_APP_BACKEND}/notes/${id}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
            Authorization: token,

        }, 
        body: data
    });

        
    const json = await response.json();
    console.log(json)

    if(!response.ok) {
        throw new Error(json.message)
    }
}