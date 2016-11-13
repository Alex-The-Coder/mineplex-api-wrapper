let RegionStatus = require('./RegionStatus');

class NetworkStatus{
    constructor(data){
        this._us          = new RegionStatus('US', data.US);
        this._eu          = new RegionStatus('EU', data.EU);
        this._playerCount = data.playerCount;
    }

    getPlayerCount(){
        return this._playerCount;
    }

    getUS(){
        return this._us;
    }

    getEU(){
        return this._eu;
    }
}

module.exports = NetworkStatus;