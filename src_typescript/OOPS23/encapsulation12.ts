class Character_en {
    private _name: string;

    constructor(name: string) { this._name = name; }

    public get name(): string {
        return this._name;
    }

    public set name(value: string) {
        if(value.length < 3 || value.length > 15) throw Error('too short (or) too long');
        this._name = value;
    }
}

const char1 = new Character_en('tiger');
// char1._name = 'lion';
console.log(char1.name);