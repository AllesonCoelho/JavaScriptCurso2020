class ResourcerProcessStation{
    constructor(name, monthlyProcessing){
        this.name = name
        this.monthlyProcessing = monthlyProcessing
    }

    static calculateProcessHours(monthlyProcessing, hours){
        return monthlyProcessing / 720 * hours
    }
}

let totalProcess  = ResourcerProcessStation.calculateProcessHours(500, 6)

console.log(totalProcess)