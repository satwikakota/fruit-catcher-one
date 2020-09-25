class Player {
    constructor() {
        this.index = null;
        this.distance = 0;
        this.name = null;
        this.score =0;
    }

    getCount() {
        var playerCountRef = database.ref('playerCount');
        console.log(playerCountRef);
        playerCountRef.on("value", (data) => {
            playerCount = data.val();
        })
        console.log(playerCount);
    }

    updateCount(count) {
        database.ref('/').update({
            playerCount: count
        });
        console.log(playerCount);
    }

    update() {
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name: this.name,
            distance: this.distance,
            score:this.score
        });
    }

    static getPlayerInfo() {
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value", (data) => {
            allPlayers = data.val();
        })
    }

    
}
