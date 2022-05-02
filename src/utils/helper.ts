export const validEmail = (input: string) => {
    let regex:RegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (input === '') {
        return{error: true, message:'email cannot be empty', next:false}
    }
    if (!regex.test(input)) {
        return{error: true, message:'invalid email',next:false}
    }
    return {error: false, message:'', next:true }
}