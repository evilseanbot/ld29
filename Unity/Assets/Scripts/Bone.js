var smash : AudioClip;
private var clipPlayed: boolean = false;

function OnTriggerStay2D(other) {
    if (other.gameObject.name == "Player") {
	    if (!GameObject.Find("CancerCounter").GetComponent(CancerCounter).gameWon()) {
	        if (!clipPlayed) {
	            AudioSource.PlayClipAtPoint(smash, Vector3(0, 0, -10));
	            clipPlayed = true;
	        }
	        var crash = other.gameObject.transform.FindChild("CrashAnimation");
	        crash.FindChild("Smoke").gameObject.particleSystem.Play();
	        crash.FindChild("Sparks").gameObject.particleSystem.Play();	       
	        crash.FindChild("BoneFragments").gameObject.particleSystem.Play();	       	        
	        GameObject.Find("Memory").GetComponent(Memory).die();
	    }
	}
}

