export const createValidation  = {
    title: {
        isString: {
            options: {
                min: 3,
                max: 10
            },
        },
        errorMessage: "Titre entre 3 et 10 charactères !"
    },
    description: {
        isString: {
            options: {
                min: 6
            }
        },
        errorMessage: "Description doit avoir 6 charactères minimun !"
    }
}

export const putValidation = {
    title: {
            isString: {
                options: {
                    min: 3,
                    max: 10
                },
            },
        errorMessage: "Titre entre 3 et 10 charactères !"
    },
    description: {
        isString: {
            options: {
                min: 6
            }
        },
        errorMessage: "Description doit avoir 6 charactères minimun !"
    },
    completed: {
        isBoolean: true,
        errorMessage: "Completed doit etre un booleen !"
    }
}


export const getValidataion = {

}

export const deleteVlidation = {

}
