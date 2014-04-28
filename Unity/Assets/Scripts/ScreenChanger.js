var nextScene : String;
var fadeToBlack : GameObject;

function Update() {
	if (Input.anyKeyDown) {
        GameObject.Instantiate(fadeToBlack, Vector3(0, 0, -7), Quaternion.Euler(0, 0, 0));
	    Invoke("changeScene", 2f);
	}
}

function changeScene() {
    Application.LoadLevel(nextScene);        
}