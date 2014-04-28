private var cancerCollected = 0;
private var cancerMissed = 0;

var greenLight1 : GameObject;
var greenLight2 : GameObject;
var greenLight3 : GameObject;
var greenLights = new Array();

var onGreenLightSprite : Sprite;

var redLight1 : GameObject;
var redLight2 : GameObject;
var redLight3 : GameObject;
var redLights = new Array();

var onRedLightSprite : Sprite;

var redFlash: GameObject;

function Start() {
	greenLights[1] = greenLight1;
	greenLights[2] = greenLight2;
	greenLights[3] = greenLight3;
	
	redLights[1] = redLight1;
	redLights[2] = redLight2;
	redLights[3] = redLight3;
	
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
    
    if (cancerCollected < 4) {
        greenLights[cancerCollected].GetComponent(SpriteRenderer).sprite = onGreenLightSprite;
    }
    
    if (gameWon()) {
        var cameraZoomer = GameObject.Find("Main Camera").GetComponent(CameraZoomer);
        
        if (!cameraZoomer.isZoomingOut()) {
            cameraZoomer.startZoomingOut();    
        }
    } 
}

function missCancer() {
    cancerMissed ++;    
    if (cancerMissed < 4) {
        redLights[cancerMissed].GetComponent(SpriteRenderer).sprite = onRedLightSprite;
    }
    
    
    var newRedFlash = GameObject.Instantiate(redFlash, Vector3(0, 0, 0), Quaternion.Euler(0, 0, 0));
    
    Invoke("removeFlash", 0.33f);
    
    if (cancerMissed > 2) {
        GameObject.Find("Memory").GetComponent(Memory).die();
    }
}

function removeFlash() {
    GameObject.Destroy(GameObject.Find("redFlash(Clone)"));
}