function OnTriggerStay2D(other) {
    if (other.gameObject.name == "Player") {
	    var cancerCounter = GameObject.Find("CancerCounter").GetComponent(CancerCounter); 
	    cancerCounter.increase();
	    GameObject.Destroy(gameObject);
	}
}

function FixedUpdate() {
    if (transform.position.y > 5f) {
	    var cancerCounter = GameObject.Find("CancerCounter").GetComponent(CancerCounter); 
	    cancerCounter.missCancer();
	    GameObject.Destroy(gameObject);        
    }
}