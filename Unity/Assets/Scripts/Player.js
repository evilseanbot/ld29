private var moveSpeed = 5f;

function FixedUpdate () {
    var xVel: float = 0f;
    
    if (Input.GetKey("left")) {
        xVel = (-moveSpeed * Time.deltaTime);        
    }

    if (Input.GetKey("right")) {
        xVel = (moveSpeed * Time.deltaTime);        
    }
        
    //var newPos = Vector3(transform.position.x+xVel, transform.position.y, transform.position.z);
    //rigidbody2D.MovePosition(newPos);
    transform.position.x += xVel;

}

function OnTriggerEnter(thing) {
    Debug.Log("Hit a thing!");
}