export class ImageHelper {

    constructor() { }    

    public static getName = (serverPath: string) => {
        const path = serverPath.split("\\")
        return path.slice(-1)[0]
    }
}
