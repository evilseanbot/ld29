private var zoomingOut: boolean = false;
private var patientZoomOutLevel = new Array();
patientZoomOutLevel[1] = 1100f;
patientZoomOutLevel[2] = 800f;
patientZoomOutLevel[0] = 900f; // This is the third level.

private var memory : Memory;
private var switchedLevel: boolean = false;

function Start() {
     memory = GameObject.Find("Memory").GetComponent(Memory);
}

function Update() {
    

    if (zoomingOut && camera.orthographicSize < patientZoomOutLevel[memory.getLevel() % 3]) {
        camera.orthographicSize *= 1.04;
    }
    
    if (zoomingOut && camera.orthographicSize > patientZoomOutLevel[memory.getLevel() % 3]) {
        if (!switchedLevel) {
            memory.nextLevel();        
            switchedLevel = true;
            zoomingOut = false;
        }
    }
}

function startZoomingOut() {
    zoomingOut = true;
}

function isZoomingOut() {
    return zoomingOut;
}