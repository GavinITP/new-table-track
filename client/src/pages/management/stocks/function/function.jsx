export const clearTab = ({setId, setName, setVat, setPrice, setUpdate} ) => {
    setId("")
    setName("")
    setVat(true)
    setPrice(0)
    setUpdate("")
}

export const selectBoolean = (value) => {
    return value=="false" ? false : true
}

export const checkAddbarValid = ({id, name, vat, price, update}) => {
    if (id.trim().length>0 && name.trim().length>0 && price>0 && update.trim().length>0){
        return true
    }else{
        return false
    }
}

export const datetime = (element) => {
    const [date, time] = element.split("T")
    const [year, month, day] = (date).split("-")
    return (day+"/"+month+"/"+year+" "+time)
}