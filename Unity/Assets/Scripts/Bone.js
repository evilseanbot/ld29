var fadeToBlack : GameObject;

function OnTriggerStay2D(other) {
    if (other.gameObject.name == "Player") {
	    if (!GameObject.Find("CancerCounter").GetComponent(CancerCounter).gameWon()) {
	    
	        var crash = other.gameObject.transform.FindChild("CrashAnimation");
	        crash.FindChild("Smoke").gameObject.particleSystem.Play();
	        crash.FindChild("Sparks").gameObject.particleSystem.Play();	       
	        crash.FindChild("BoneFragments").gameObject.particleSystem.Play();	       	        
	        Invoke("addBlack", 2f); 
	        Invoke("resetGame", 4f);
	    }
	}
}

function resetGame() {
    Application.LoadLevel("main");
}

function addBlack() {
    GameObject.Instantiate(fadeToBlack, Vector3(0, 0, -3), Quaternion.Euler(0, 0, 0));
}