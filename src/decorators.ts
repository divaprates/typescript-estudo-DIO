function showName(target: any) {
    console.log(target);
}

@showName
export class Person {}

function apiVersion(version: string) {
    return (target: any) => {
        Object.assign(target.prototype, { __version: version });
    };
}

@apiVersion("1.10")
export class Api {}

function minLength(length: number) {
    return(target: any, key: string) => {
        console.log('target: ' , target[key], ' - key: ', key);
        let _value = target[key];

        const getter = () => _value;
        const setter = (value: string) => {
            if(value.length < length) {
                throw new Error("Tamanho inválido");
            }else {
                _value = value;
            }
        }

        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
        });
    }
}

export class ApiNome {

    @minLength(3)
    name: string;
    
    constructor(name: string) {
        this.name = name;
    }
}