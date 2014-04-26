private var cancerCollected = 0;

function Update () {
    GetComponent(TextMesh).text = cancerCollected + " / 5";    
}

function gameWon() {
    if (cancerCollected > 2) {
        return true;
    } else {
        return false;
    }
}

function increase() {
    cancerCollected ++;
    
    if (gameWon()) {
        GameObject.Find("Main Camera").GetComponent(CameraZoomer).startZoomingOut();    
    } 
}