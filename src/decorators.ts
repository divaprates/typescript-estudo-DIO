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
