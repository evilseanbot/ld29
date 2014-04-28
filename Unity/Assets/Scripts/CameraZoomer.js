private var zoomingOut: boolean = false;
private var patientZoomOutLevel = new Array();
patientZoomOutLevel[1] = 1100f;
patientZoomOutLevel[2] = 800f;
patientZoomOutLevel[0] = 1800f; // This is the third level.

private var memory : Memory;
private var switchedLevel: boolean = false;

var fadeToBlack : GameObject;

function Start() {
     memory = GameObject.Find("Memory").GetComponent(Memory);
}

function Update() {
    

    if (zoomingOut && camera.orthographicSize < patientZoomOutLevel[memory.getLevel() % 3]) {
        camera.orthographicSize *= 1.02;
    }
    
    if (zoomingOut && camera.orthographicSize > patientZoomOutLevel[memory.getLevel() % 3]) {
        if (!switchedLevel) {
            memory.increaseLevel();
            switchedLevel = true;
            zoomingOut = false;
        }
        Invoke("addBlackFade", 2f);
        Invoke("nextLevel", 4f);
    }
}

function startZoomingOut() {
    zoomingOut = true;
}

function nextLevel() {
    Application.LoadLevel("main");
}

function isZoomingOut() {
    return zoomingOut;
}

function addBlackFade() {
    var blackFade = GameObject.Instantiate(fadeToBlack, Vector3(0, 0, -3), Quaternion.Euler(0, 0, 0));
    blackFade.transform.localScale = Vector3(4000, 4000, 1);
}