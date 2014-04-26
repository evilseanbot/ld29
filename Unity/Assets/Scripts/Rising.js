private var fallingSpeed = 320f;

function FixedUpdate() {
     rigidbody.velocity.y = fallingSpeed * Time.deltaTime;
}