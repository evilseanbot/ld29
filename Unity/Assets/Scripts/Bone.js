function OnTriggerEnter(thing) {
    Debug.Log("Hit the player!");
}

function OnCollisionEnter (collision) {
    Debug.Log("CollisionEnter");
}

function OnCollision2DEnter (collision) {
    Debug.Log("Collision2DEnter");
}

function OnCollisionEnter2D(collision) {
    Debug.Log("CollisionEnter2D");
}

function OnCollisionStay(collision) {
    Debug.Log("CollisionStay");
}

function OnCollisionStay2D(collision) {
    Debug.Log("CollisionStay2D");
}

function OnCollision2DStay(collision) {
    Debug.Log("Collision2DStay");
}