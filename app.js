        function showReward(){
            document.getElementById("reward").innerHTML =
            "🎉 Selamat! Kamu mendapatkan 100 Gold!";
        }

        function downloadGame(){
            alert("Download akan segera dimulai!");
        }

        let player = 1000;

        function addPlayer(){
            player++;
            document.getElementById("playerCount").innerHTML =
            player;
        }