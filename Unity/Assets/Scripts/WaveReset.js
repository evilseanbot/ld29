private var leftBoundary = -4f;
private var rightBoundary = 4f;

function Update () {
    if (transform.position.x > rightBoundary) {
        transform.position.x = leftBoundary;
    } else if (transform.position.x < leftBoundary) {
        transform.position.x = rightBoundary;
    }

    
}