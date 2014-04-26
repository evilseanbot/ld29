var streamSpeed = 8f;

function OnTriggerStay2D(other: Collider2D) {
    other.gameObject.transform.position.x += streamSpeed * Time.deltaTime;
}