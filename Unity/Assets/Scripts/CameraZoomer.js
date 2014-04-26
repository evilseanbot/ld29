private var zoomingOut: boolean = false;

function Update() {
    if (zoomingOut) {
        camera.orthographicSize += 0.2;
    }
}

function startZoomingOut() {
    zoomingOut = true;
}