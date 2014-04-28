var collectedParticles: GameObject;
var collectedSound : AudioClip;
var missedSound : AudioClip;

function OnTriggerStay2D(other) {
    if (other.gameObject.name == "Player") {
	    var cancerCounter = GameObject.Find("CancerCounter").GetComponent(CancerCounter); 
	    if (!cancerCounter.gameWon()) {
		    cancerCounter.increase();
		    GameObject.Instantiate(collectedParticles, transform.position, Quaternion.Euler(0, 0, -4));
		    AudioSource.PlayClipAtPoint(collectedSound, Vector3(0, 0, -10));
		}
		GameObject.Destroy(gameObject);
	}
}

function FixedUpdate() {
    if (transform.position.y > 5f) {
	    var cancerCounter = GameObject.Find("CancerCounter").GetComponent(CancerCounter); 
	    if (!cancerCounter.gameWon()) {
		    cancerCounter.missCancer();
		    AudioSource.PlayClipAtPoint(missedSound, Vector3(0, 0, -10));	    
		}
		GameObject.Destroy(gameObject);				
    }
}