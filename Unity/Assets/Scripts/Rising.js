var fallingSpeed = 4f;

function FixedUpdate() {
     transform.position.y += fallingSpeed * Time.deltaTime;
     
     if (transform.position.y > 20f) {
         GameObject.Destroy(gameObject);
     }
}