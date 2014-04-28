var streamSpeed = 8f;

function OnTriggerStay2D(other: Collider2D) {
    if (other.gameObject.name != "Wall") {
        other.gameObject.transform.position.x += streamSpeed * Time.deltaTime;
    }
}